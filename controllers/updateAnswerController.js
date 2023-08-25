const answerModel = require("../models/answerModel");
const questionModel = require("../models/questionModel");
const mongoose = require('mongoose');

const updateAnswer = async (req, res) => {
    const questionId = req.params.id;
    console.log('question id:', questionId);
    const answerId = req.params.id2;
    console.log('answer id:', answerId);
    const newAnswerId = new mongoose.Types.ObjectId(answerId);
    const body = req.body;

    if (questionId !== null && answerId !== null) {
        const update = {
            "preferred": true,
        };
        await questionModel.findOneAndUpdate({ "answers._id": newAnswerId }, { '$set': {"answers.$.preferred": true} }, {new: true}).then((value) => {
            console.log(value);
            res.status(200).json({ "message": "answer updated", "question": value });
        }).catch((e) => {
            console.log(e);
            res.status(400).json({ "message": "failed to update answer" });
        });


        // await questionModel.findOne({ "_id": questionId }, { "answers": { $elemMatch: { "_id": newAnswerId} } }).then((value) => {
        //     console.log(value);
        //     res.status(200).json({"message": "answer found", "answer": value});
        // }).catch((e) => {
        //     console.log(e);
        //     res.status(400).json({"message": "answer not found"});
        // });


    } else {
        res.status(400).json({ "message": "something went wrong" });
    }
}

module.exports = updateAnswer;