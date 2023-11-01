import { promises as fs } from 'fs';

/**
 * Function @param deleteImages
 * @param imagePaths the paths of the images
 * removes the images from the server
 */
export default async function deleteImages(imagePaths) {
  for (const imagePath of imagePaths) {
    fs.unlink(imagePath)
      .then(() => console.log(`=> Deleted image: ${imagePath}`))
      .catch(err => console.error(`Error deleting images: ${imagePath}\n${err.message}`));
  }
}
