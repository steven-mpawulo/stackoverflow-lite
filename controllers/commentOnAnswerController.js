const mongoose = require('mongoose');
const questionModel = require('../models/questionModel');
const commentOnAnswer = (req, res) => {
    const questionId = req.params.id;
    console.log(questionId);
    const answerId = req.params.id2;
    console.log(answerId);
    const newAnswerId = new mongoose.Types.ObjectId(answerId);
    const body = req.body;
    console.log(body);

    if (questionId !== null && answerId !== null) {
        if (Object.keys(body).length !== 0){
            if (body.comment){
                questionModel.findOneAndUpdate({"answers._id": newAnswerId}, {'$set': {'answers.$.comment': body.comment}}, {new: true}).then((value) => {
                    console.log(value);
                    res.status(200).json({"message": "comment added", "question": value});
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "failed to add comment"});
                });
            } else {
                res.status(400).json({"message": "something went wrong"});
            }
            
        } else {
            res.status(400).json({"message": "something went wrong"});
        }
        

    } else {
        res.status(400).json({"message": "something went wrong"});
    }

}

module.exports = commentOnAnswer;