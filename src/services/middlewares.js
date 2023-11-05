import decodeAuthToken from '../utils/decodeAuthToken';
import settings from '../settings';
import { unauthorized } from '../utils/statics';
/**
 * This function is used to authenticate request.
 * After authetication it inserts the user data to reqest object.
 */
export async function auth(req, res, next) {
  try {
    const token = req.cookies?.[settings.SESSION_KEY] || req.headers.cookie;
    if (!token) return next();
    const user = await decodeAuthToken(token);
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send(unauthorized);
  }
}
