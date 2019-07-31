let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    userName: String,
    password: String,
    location: String,
    img: String,
    is_logged_in: false,
    reviews: [
        {
            title: String,
            location: String,
            bq: Number,
            sk: Number,
            clean: Number,
            dtq: Number,
            ds: Number,
            fq: Number,
            imgs: [String],
            date: Date
        }
    ]
});

module.exports = mongoose.model('UserModel', userSchema, 'RegisterModel');