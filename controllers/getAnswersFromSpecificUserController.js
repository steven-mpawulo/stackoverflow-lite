const answerModel = require("../models/answerModel");
const mongoose = require('mongoose');

const getAnswersFromSpecificUser = async (req, res) => {
    const userId = req.params.id;
    await answerModel.find({"owner": userId}).then((value) => {
        console.log(value);
        res.status(200).json({"message": "answers found", "answers": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "no answers found"});
    });

}

module.exports = getAnswersFromSpecificUser;