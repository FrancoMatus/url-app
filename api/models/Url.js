const mongoose = require('mongoose');
const { Schema } = mongoose;

const UrlSchema = new Schema({
    link: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('url', UrlSchema)