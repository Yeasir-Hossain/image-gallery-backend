import { badRequest, serverError } from '../../utils/statics';
import Image from './image.schema';
import path from 'path';


//   these are the set to validate the request query.
const allowedQuery = new Set(['$or']);

/**
 * Uploads the image in to the server and then store it in the database.
 * @param {Object} imageUp - It is a function to upload the image to the server.
 * @param {Object} db - The database object for interacting with the database.
 * @returns {Object} - The new image object
 */
export const upload = ({ db, imageUp }) => async (req, res) => {
  try {
    if (!req.files.image) return res.status(400).send(badRequest);

    if (req.files?.image) {
      req.body.path = await imageUp(req.files.image.path);
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
 * @param {Object} db - The database object for interacting with the database.
 * @returns {Object} - all images
 */
export const getImages = ({ db }) => async (req, res) => {
  try {
    // key: { query: { '_id': { '$in': productIds } } }
    const images = await db.find({ table: Image, key: { query: req.query, allowedQuery: allowedQuery, paginate: false } });
    images ? res.send(images) : res.status(400).send(badRequest);
  }
  catch (e) {
    res.status(500).send(serverError);
    console.log(e);
  }
};


/**
 * @param serveImage function is used to serve an image
 * @param req.params contains the image id.
 * @returns the image
 */
export const serveImage = () => async (req, res) => {
  try {
    const imageId = req.params.imageId;
    imageId ? res.status(200).sendFile(path.join(path.resolve(), 'images', imageId)) : res.status(400).send(badRequest);
  }
  catch (err) {
    console.log(err);
    res.status(500).send(serverError);
  }
};