const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [
    ],
});

module.exports = mongoose.model("Question", questionSchema);