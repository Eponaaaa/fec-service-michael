const db = require('./db/index.js');
const path = require('path');
const fs = require('fs');

const IMG_PATH = path.join(__dirname, 'images');
const BASE_URL = 'https://hrr44fec.s3.us-east-2.amazonaws.com/';

//read the files names in the image directory
const imgFileNames = fs.readdirSync(IMG_PATH, (err, files) => {
  if (err) {
    throw new Error(console.log("couldn't read the files"));
  } else {
    return files;
  }
});

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const createRandomPhotoUrls = (images) => {
  //pick random number of photos to use between 1-10
  const numberOfPhotos = getRandomNumber(1, 10);
  const activeImages = [];

  //pick random photo out of the array to fill
  for (let i = 0; i <= numberOfPhotos; i++) {
    activeImages.push(images[getRandomNumber(0, images.length)]);
  }

  db.sync()
    .then(() => {
      activeImages.forEach((img, i) => {
        let key = `url${i}`;
        photos.create({
          [key]: img
        });
      });
    });
};

//create 100 records
for (let i = 0; i < 100; i++) {
  createRandomPhotoUrls(imgFileNames);
}