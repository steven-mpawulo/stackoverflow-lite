const questionModel = require("../models/questionModel");

const getSpecificQuestion = async (req, res) => {
    const id = req.params.id;
    console.log(id);

    if (id !== null) {
        await questionModel.findById({_id : id}).exec().then((value) => {
            console.log(value);
            if (value !== null) {
                res.status(200).json({"message": "question fetched"});
            }

        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
    }

}

module.exports = getSpecificQuestion;