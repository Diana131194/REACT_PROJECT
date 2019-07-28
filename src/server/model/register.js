let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let registerSchema = new Schema({
    userName: String,
    password: String,
    location: String,
    img: String
});

module.exports = mongoose.model('RegisterModel', registerSchema, 'RegisterModel');