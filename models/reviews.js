const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
  userName: String,
  text: String,
  product: { type: Schema.Types.ObjectId, ref: 'myProducts'},
});



module.exports = mongoose.model('Reviews', ReviewsSchema)