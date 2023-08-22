const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answer: [{
        answer: String,
    }]
});

module.exports = mongoose.model("Question", questionSchema);