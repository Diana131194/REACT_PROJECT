const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restaurantSchema = new Schema({
    name: String,
    city: String
   // location: { type: { type: String }, coordinates: [Number] }

});
//restaurantSchema.index({ location: "2dsphere" });
module.exports = mongoose.model('Restaurant', restaurantSchema);
