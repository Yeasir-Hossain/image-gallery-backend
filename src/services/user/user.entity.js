import jwt from 'jsonwebtoken';
import User from './user.schema';
import { serverError } from '../../utils/statics';
import generateSessionId from '../../utils/generateSessionId';

/**
 * Creates a new user in the database with the generated session ID.
 * @param {Object} req - The request object containing the properties for the new user.
 * @param {Object} db - The database object for interacting with the database.
 * @returns {Object} the JWT token for an indefinite time for the user in the cookie.
 */
export const register = ({ db, settings }) => async (req, res) => {
  try {
    if (req.user) return res.status(200).send({ message: 'OK' });
    const user = await db.create({ table: User, key: { sid: generateSessionId() } });
    const token = jwt.sign({ id: user.id }, settings.secret);
    res.cookie(settings.SESSION_KEY, token, {
      httpOnly: true,
      ...settings.useHTTP2 && {
        sameSite: 'None',
        secure: true,
      },
      expires: new Date(253402300000000)
    });
    res.status(200).send({ message: 'OK' });
  }
  catch (e) {
    console.log(e);
    res.status(500).send(serverError);
  }
};