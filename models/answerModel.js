const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answer: String,
    votes: Number,
    comment: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stackoverflowUser',
    },
    preferred: {
        type: Boolean,
        default: false,
    }

});

module.exports = mongoose.model('answer', answerSchema);