const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [
        
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stackoverflowUser'
    }
});

module.exports = mongoose.model("Question", questionSchema);