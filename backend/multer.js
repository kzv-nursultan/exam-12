const path = require('path');
const multer = require("multer");
const {nanoid} = require("nanoid");
const config = require("./config");
const tryToCreateDir = require("./utils");

const createMulter = dirName => {
  const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
      await tryToCreateDir(dirName);

      cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
      const filename = nanoid() + path.extname(file.originalname);
      const filepath = path.join(dirName, filename);

      cb(null, filepath);
    }
  });

  return multer({storage});
};

const photos = createMulter('uploads');

module.exports = photos;

