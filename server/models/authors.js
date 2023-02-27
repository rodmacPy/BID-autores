const { Schema, model } = require('mongoose');
const AuthorsSchema = Schema({
    name: {
        type: String,
        require: [true, 'El nombre es obligatorio'],
        unique: true,
        minlength: 3
    }
});

module.exports = model('Authors', AuthorsSchema)