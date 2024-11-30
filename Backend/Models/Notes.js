const mongoose = require('mongoose');

const notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true 
    },
    tag: {
        type: String,
        default:"General"
    },
    Date: {
        type: Date,
        required: Date.now
    }
})

module.exports = mongoose.model('note',notesSchema);