import { badRequest, serverError } from '../../utils/statics';
import Image from './image.schema';
import cloudinary from 'cloudinary';


//   these are the set to validate the request query.
const allowedQuery = new Set(['$or', '$and', '_id']);

/**
 * Uploads the image in to cloudinary and then store it in the database.
 * @param {Object} db - The database object for interacting with the database.
 * @returns {Object} - The new image object
 */
export const upload = ({ db }) => async (req, res) => {
  try {
    if (!req.files.image) return res.status(400).send(badRequest);

    if (req.files.image) {
      // uploads the iamge to cloudinary and save the url path in database
      const cloudinaryResponse = await cloudinary.v2.uploader.upload(req.files.image.path);
      req.body.path = cloudinaryResponse.secure_url;
    }

    // connect the user id to the image
    if (req.user) {
      req.body.user = req.user.id;
    }

    const image = await db.create({ table: Image, key: req.body });
    image ? res.send(image) : res.status(400).send(badRequest);
  }
  catch (e) {
    res.status(500).send(serverError);
    console.log(e);
  }
};

/**
 * This function is used to get the images and also if there is any user images.
 * Here if the user upload any images he or she will also get the images uploaded by them only along with the default images
 * @param {Object} db - The database object for interacting with the database.
 * @returns {Object} - all images
 */
export const getImages = ({ db }) => async (req, res) => {
  try {
    const query = {
      $or: [
        { user: { $exists: false } }
      ]
    };

    if (req.user && req.user.id) {
      query.$or.push({ user: req.user.id });
    }

    const images = await db.find({
      table: Image,
      key: {
        query,
        allowedQuery: allowedQuery,
        paginate: false
      }
    });
    images ? res.status(200).send(images) : res.status(400).send(badRequest);
  } catch (e) {
    console.error(e);
    res.status(500).send(serverError);
  }
};

/**
 * @param deleteImage function is used to delete images that the user has uploaded
 * @param req.params contains the image id.
 * @returns success or failed
 */
export const deleteImage = ({ db }) => async (req, res) => {
  try {
    if (!req.body.id.length) return res.status(400).send(badRequest);
    const deleteResult = await db.removeAll({ table: Image, key: { id: { '$in': req.body.id } } });
    deleteResult.deletedCount ? res.status(400).send({ message: 'image not found', status: false }) : res.status(200).send({ message: 'Deleted Successfully', status: true });
  }
  catch (err) {
    console.log(err);
    res.status(500).send(serverError);
  }
};