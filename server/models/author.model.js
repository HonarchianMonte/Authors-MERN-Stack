const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "{PATH} cannot be empty"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"]
    },
    
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);