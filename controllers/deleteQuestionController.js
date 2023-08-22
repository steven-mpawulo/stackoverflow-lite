const questionModel = require("../models/questionModel")

const deleteQuestion = async (req, res) => {
    const id = req.params.id;
    if (id !== null) {
        await questionModel.findOneAndDelete({'_id': id}).then((value) => {
            console.log(value);
            res.status(200).json({"message": "question deleted", "question": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});

        });
    } else {
        res.status(400).json({"message": "something went wrong"});
    }
    

}

module.exports = deleteQuestion;