const answerModel = require("../models/answerModel");
const questionModel = require("../models/questionModel");
const mongoose = require('mongoose');

const updateAnswer = async (req, res) => {
    const questionId = req.params.id;
    console.log('question id:', questionId);
    const answerId = req.params.id2;
    console.log('answer id:',answerId);
    const newAnswerId = new mongoose.Types.ObjectId(answerId);
    const body = req.body;

    if (questionId !== null && answerId !== null) {
        //    await answerModel.updateOne({'_id': answerId}, {
        //     $set: {
        //         "answer": body.answer,
        //     }
        //    }).then((value) => {
        //     console.log(value);
        //     res.status(200).json({"message": "succesfully updated answer"});

        //    }).catch((e) => {
        //     console.log(e);
        //     res.status(400).json({"message": "something went wrong"});
        //    });

        await questionModel.findOne({ "_id": questionId }, { "answers": { $elemMatch: { "_id": newAnswerId} } }).then((value) => {
            console.log(value);
            res.status(200).json({"message": "answer found", "answer": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "answer not found"});
        });

        // await questionModel.findById({'_id': questionId}).then((value) => {
        //     // console.log(value);
        //     // console.log(value.answers);
        //   const result = value.answers.filter((answer) => {
        //     return answer._id === answerId;
        //   });
        //   console.log(result);
        // })
    } else {
        res.status(400).json({ "message": "something went wrong" });
    }
}

module.exports = updateAnswer;