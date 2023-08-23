const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answer: String,
    votes: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stackoverflowUser',
    }

});

module.exports = mongoose.model('answer', answerSchema);