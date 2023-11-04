import { auth } from '../middlewares';
import { deleteImage, getImages, upload } from './image.entity';
import cloudinary from 'cloudinary';

export default function image() {
  // Intitalizing cloudinary
  cloudinary.config(this.settings.CLOUDINARY_CREDS);

  /**
  * POST /image
  * @description This route is used upload an image.
  */
  this.route.post('/image', auth, upload(this));

  /**
  * GET /image
  * @description This route is used to get all image.
  */
  this.route.get('/image', auth, getImages(this));

  /**
  * GET /image/:imageId
  * @description This route is used delete an image.
  */
  this.route.delete('/image', auth, deleteImage(this));
}