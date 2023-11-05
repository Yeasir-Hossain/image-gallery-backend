## Live URL:

## Front-End git repo: https://github.com/Yeasir-Hossain/image-gallery

## Features:
- I have created a user service where the user is being resgitered when the browser opens and a cookies is set which is used to detect the logged in user.
- A image service is created with upload image, get all images and delete image from backend.
- By default there are 11 images that were given in the instruction and these cannot be deleted permanently from the backend.
- Images that are uploaded by only the user can be deleted permanenetly.
- User can upload multiple images.

## Challenges:
Normally the image is stored in the server for faster upload and faster access by an image serving api endpoint but I did not have a free tier for storing images.

## Solution:
I used a third party image CDN named Cloudinary. I have uploaded the image to cloudinary and then saved it in mongodb with the url of the image. Though this solution takes sometime for the image to upload but does the work perfectly.


## This boiler plate is created by github user @dreygur.
A framework like boilerplate on top of express.js, [socket.io](https://www.npmjs.com/package/socket.io), mongodb, orama

This booilerplate handles static file serving for SPA and also does the api serving part.

## Features:

- SPA Server
- REST api serving
- Search using [orama](https://www.npmjs.com/package/@orama/orama) (a js search engine)
- Service Layer Architecture
- Websocket using [socket.io](https://www.npmjs.com/package/socket.io)
- Mongoose ORM
- Mailer using nodemailer
- Basic database operations pebuilt, so one just have to write schema and nothing more
- Disc caching
- Written in ES6 so newcomers or frontend developers don't have to worry about node.js native api's
- Pre-integrated linter using eslint so the code is always abide by the standards

Made with :heart: by [Rakibul Yeasin](https://facebook.com/dreygur)
