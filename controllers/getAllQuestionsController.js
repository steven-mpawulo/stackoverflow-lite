const questionModel = require("../models/questionModel")

const getAllQuestions = async (req, res ) => {
    await questionModel.find({}).then((value) => {
        console.log(value);
        if (value !== null){
            res.status(200).json({"message": "questions fetched", "questions": value});
        } else {
            res.status(400).json({"message": "something went wrong"});
        }

    });
}

module.exports = getAllQuestions;