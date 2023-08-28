const questionModel = require("../models/questionModel")

const searchQuestion = async (req, res) => {
    const body = req.body;
    if (Object.keys(body).length !== 0){
        await questionModel.find({$text: {
            search: body.searchQuestion
        }}).then((value) => {
            console.log(value);
            res.status(200).json({"message": "some questions found", "questions": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });

    } else {
        res.status(400).json({"message": "something went wrong"});
    }
  
}

module.exports = searchQuestion;