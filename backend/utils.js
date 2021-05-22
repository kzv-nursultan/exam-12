const fs = require('fs').promises;
const path = require("path");
const config = require('./config');


const tryToCreateDir = async dirName => {
  const dirPath = path.join(config.uploadPath, dirName);

  try {
    await fs.access(dirPath);
  } catch (e) {
    await fs.mkdir(dirPath, {recursive: true});
  }
};

module.exports = tryToCreateDir;