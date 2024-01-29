const mongoose = require('mongoose');

const SchemaUsers = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required:true,
        lowercase: true,
        max: 255
    },
    password: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Usuario',SchemaUsers);

