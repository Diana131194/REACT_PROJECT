const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    author: String,
    title: String,
    location: String,
    bq: Number,
    sk: Number,
    clean: Number,
    dtq: Number,
    ds: Number,
    fq: Number,
    imgs: [String],
    date: Date,
   // cord: { type: { type: String }, coordinates: [Number] }

});
//reviewSchema.index({ location: "2dsphere" });
module.exports = mongoose.model('ReviewModel', reviewSchema, 'ReviewModel');
