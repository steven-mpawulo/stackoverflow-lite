const questionModel = require("../models/questionModel");

const addAnswer = (req, res) => {
    const body = req.body;
    console.log(body);
    const id = req.params.id;
    console.log(id);
    if (id !== null) {
        if (Object.keys(body).length !== 0) {
            questionModel.findOneAndUpdate({ '_id': id }, {$addToSet: {answers: body.answer } }).exec().then((value) => {
                console.log(value);
                res.status(200).json({"message": "answer added",
                "question": value,
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