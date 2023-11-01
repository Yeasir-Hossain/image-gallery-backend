import image from './image/image';
import user from './user/user';

export const services = (app) => {
  app.configure(user);
  app.configure(image);
};
