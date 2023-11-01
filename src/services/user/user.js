import { auth } from '../middlewares';
import { register } from './user.entity';

export default function user() {

  /**
  * POST /user
  * @description This route is used to create a user and store session ID.
  */
  this.route.post('/user', auth, register(this));
}