## Live URL

## Front-End Git Repo
[Image Gallery Frontend Repository](https://github.com/Yeasir-Hossain/image-gallery)

## Features
- User registration is handled through a user service that sets a cookie to detect the logged-in user when the browser opens.
- An image service is provided, allowing users to upload images, retrieve all images, and delete images from the backend.
- 11 default images are included and cannot be permanently deleted from the backend.
- Only user-uploaded images can be deleted permanently.
- Users can upload multiple images.

## Challenges
One challenge was the storage of images for faster access, as a free tier for image storage was not available.

## Solution
The solution involved using a third-party image CDN called Cloudinary. Images are uploaded to Cloudinary and saved in MongoDB with the image URL. This approach may take some time for image upload but effectively serves the purpose.

## Boilerplate Information
This boilerplate was created by GitHub user @dreygur and is built on top of Express.js, [socket.io](https://www.npmjs.com/package/socket.io), and MongoDB, utilizing Orama for search.

### Features
- SPA Server
- REST API serving
- Search using [orama](https://www.npmjs.com/package/@orama/orama) (a JavaScript search engine)
- Service Layer Architecture
- Websocket functionality with [socket.io](https://www.npmjs.com/package/socket.io)
- Mongoose ORM
- Mailer functionality using Nodemailer
- Basic database operations prebuilt, requiring only schema definition
- Disk caching
- Written in ES6 for a newcomer-friendly approach, eliminating concerns about Node.js native APIs
- Pre-integrated linter using ESLint for code standards compliance

Made with ❤️ by [Rakibul Yeasin](https://facebook.com/dreygur).
