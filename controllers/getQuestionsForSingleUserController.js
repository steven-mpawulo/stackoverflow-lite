const questionModel = require("../models/questionModel");
const mongoose = require('mongoose');


const getQuestionsForSingleUser = async (req, res) => {
    const userId = new mongoose.Types.ObjectId(req.params.id);
    if (userId !== null) {
        await questionModel.find({"owner": userId}).then((value) => {
            console.log(value);
            res.status(200).json({"message": "questions found", "questions": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
    } else {
        res.status(400).json({"message": "something went wrong"});
    }

    
}

module.exports = getQuestionsForSingleUser;