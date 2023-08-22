const questionModel = require("../models/questionModel");

const addAnswer = (req, res) => {
    const body = req.body;
    console.log(body);
    const id = req.params.id;
    console.log(id);
    if (id !== null) {
        if (Object.keys(body).length !== 0) {
            questionModel.findOneAndUpdate({ '_id': id }, { 'answer': body.answer });
        } else {
            res.status(400).json({ "message": "something went wrong" });
        }

    } else {
        res.status(400).json({ "message": "something went wrong" });
    }
}

moduel.exports = addAnswer;