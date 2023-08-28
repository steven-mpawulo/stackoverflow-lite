const answerModel = require("../models/answerModel");
const questionModel = require("../models/questionModel");

const addAnswer = async (req, res) => {
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

            await answer.save().then(async (value) => {
                console.log(value);
                await questionModel.findOneAndUpdate({ '_id': id }, {$inc: { answerCount: 1 } }, {$addToSet: {answers: value} },{new: true}).exec().then((value) => {
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