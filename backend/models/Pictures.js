const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const picture = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Pictures = mongoose.model('Pictures', picture);
module.exports = Pictures;