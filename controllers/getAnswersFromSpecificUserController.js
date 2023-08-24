const answerModel = require("../models/answerModel");

const getAnswersFromSpecificUserController = async (req, res) => {
    const userId = req.params.id;
    await answerModel.find({"_id": userId}).then((value) => {
        console.log(value);
        res.status(200).json({"message": "answers found", "answers": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "no answers found"});
    });

}

module.exports = getAnswersFromSpecificUserController;