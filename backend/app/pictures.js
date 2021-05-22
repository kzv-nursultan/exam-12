const express = require("express");
const Pictures = require("../models/Pictures");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pictures = await Pictures.find().populate('author');
    res.status(200).send(pictures);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;