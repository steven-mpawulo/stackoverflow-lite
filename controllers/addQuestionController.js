const questionModel = require("../models/questionModel");

const addQuestion = (req, res) => {
    const body = req.body;
    const user = req.user;
    console.log(user);
    console.log(body);
    if (Object.keys(body).length === 0){
        res.status(400).json({"message": "please provide some data"});

    } else {
        const question = new questionModel({
            question: body.question,
            owner: user._id,
        });

        question.save().then((value) => {
            console.log(value);
            res.status(200).json({"message": "question added", "question": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
    }

}

module.exports = addQuestion;