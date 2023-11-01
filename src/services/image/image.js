import { auth } from '../middlewares';
import { deleteImage, getImages, serveImage, upload } from './image.entity';

export default function image() {
  /**
  * POST /image
  * @description This route is used upload an image.
  */
  this.route.post('/image', auth, upload(this));

  /**
  * GET /image
  * @description This route is used upload an image.
  */
  this.route.get('/image', auth, getImages(this));

  /**
  * GET /image/:imageId
  * @description This route is used to server an image to frontend.
  */
  this.route.get('/image/:imageId', serveImage(this));

  /**
  * GET /image/:imageId
  * @description This route is used to server an image to frontend.
  */
  this.route.delete('/image', auth, deleteImage(this));
}