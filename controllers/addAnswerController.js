const answerModel = require("../models/answerModel");
const questionModel = require("../models/questionModel");

const addAnswer = (req, res) => {
    const body = req.body;
    const user = req.user;
    console.log(user);
    console.log(body);
    const id = req.params.id;
    console.log(id);
    if (id !== null) {
        if (Object.keys(body).length !== 0) {
            const answer = answerModel({
                answer: body.answer,
                votes: 0,
                owner: user._id,
            });

            answer.save().then((value) => {
                console.log(value);
                questionModel.findOneAndUpdate({ '_id': id }, {$addToSet: {answers: value} }, { $inc: { "answerCount.$": 1 } }, {new: true}).exec().then((value) => {
                    console.log(value);
                    res.status(200).json({"message": "answer added",
                    "question": value,
                });
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "something went wrong"});
                });

            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "something went wrong"});
            });
            
        } else {
            res.status(400).json({ "message": "something went wrong" });
        }

    } else {
        res.status(400).json({ "message": "something went wrong" });
    }
}

module.exports = addAnswer;