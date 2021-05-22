const express = require("express");
const Pictures = require("../models/Pictures");
const auth = require("../middleware/auth");
const path = require("path");
const multer = require("multer");
const config = require("../config");
const {nanoid} = require("nanoid");
const router = express.Router();

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename:(req, file, cb) => {
    cb(null, nanoid(4) + path.extname(file.originalname));
  }
});

const upload = multer({storage});

router.get('/', async (req, res) => {
  try {
    const pictures = await Pictures.find().populate('author');
    res.status(200).send(pictures);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const author = req.params.id;
    const data = await Pictures.find({author}).populate('author');
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const {author, name} = req.body;
    const image = req?.file ? '/uploads/' + req.file.filename : null;
    const newPicture =  new Pictures({
      author,
      name,
      image
    });
    await newPicture.save()
    const pictures = await Pictures.find().populate('author');
    res.status(200).send(pictures);
  } catch (e) {
    res.status(400).send(e);
  }
})

module.exports = router;