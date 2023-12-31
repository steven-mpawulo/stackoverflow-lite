const mongoose = require("mongoose");
const questionModel = require('../models/questionModel');
const voteForAnswer = async (req, res) => {
    const questionId = req.params.id;
    const answerId = req.params.id2;
    const newAnswerId = new mongoose.Types.ObjectId(answerId);
    const body = req.body;


    if (questionId !== null && answerId !== null) {
        if (Object.keys(body).length !== 0) {
            if (req.body.upvote !== null && req.body.upvote !== "") {
                await questionModel.findOneAndUpdate({ "answers._id": newAnswerId }, req.body.upvote ? { '$inc': { "answers.$.votes": 1 } } : { '$inc': { "answers.$.votes": -1 } }, { new: true }).then((value) => {
                    console.log(value);
                    res.status(200).json({ "message": "answer updated", "question": value });
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({ "message": "failed to update answer" });
                });
            } else {
                res.status(400).json({ "message": "something went wrong" });
            }


        } else {
            res.status(400).json({ "message": "somethin went wrong" });
        }

    }
}

module.exports = voteForAnswer;