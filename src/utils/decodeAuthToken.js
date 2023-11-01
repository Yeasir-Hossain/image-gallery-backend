import jwt from 'jsonwebtoken';
import * as operations from '../controllers/operations';
import User from '../services/user/user.schema';
import settings from '../../settings.json';

export default async function decodeAuthToken(token) {
  try {
    const decoded = jwt.verify(token, settings.secret);
    const user = await operations.findOne({ table: User, key: { id: decoded.id } });
    if (!user) throw new Error('user not found');
    return user;
  }
  catch (e) {
    console.log(e);
  }
}