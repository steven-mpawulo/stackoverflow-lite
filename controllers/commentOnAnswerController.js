const mongoose = require('mongoose');
const questionModel = require('../models/questionModel');
const commentOnAnswerController = (req, res) => {
    const questionId = req.params.id;
    console.log(questionId);
    const answerId = req.params.id2;
    console.log(answerId);
    const newAnswerId = mongoose.Types.ObjectId(answerId);
    const body = req.body;
    console.log(body);

    if (questionId !== null && answerId !== null) {
        if (Object.keys(body).length !== 0){
            questionModel.findOneAndUpdate({"answers._id": newAnswerId}, {'$set': {'answers.$.comment': body.comment}}).then((value) => {
                console.log(value);
                res.status(200).json({"message": "comment added", "question": value});
            }).catch((e) => {});
        } else {
            res.status(400).json({"message": "something went wrong"});
        }
        

    } else {
        res.status(400).json({"message": "something went wrong"});
    }

}

module.exports = commentOnAnswerController;