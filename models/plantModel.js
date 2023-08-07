const mongoose = require('mongoose');

const plantHealthSchema = new mongoose.Schema({
    data: {
        type: String,
    }
}, { "strict": false },
    { timestamps: true }
);

const plantHealthModel = new mongoose.model('Plant Health', plantHealthSchema);
module.exports = plantHealthModel;
