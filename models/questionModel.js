const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [
        {
            answer: String,
        }
    ],
});

module.exports = mongoose.model("Question", questionSchema);