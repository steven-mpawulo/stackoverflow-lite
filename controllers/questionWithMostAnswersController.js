const questionWithMostAnswers = async (req, res) => {
    await questionModel.find({}).sort({"answerCount": -1}).limit(1).then((value) => {
        console.log(value);
        res.status(200).json({"message": "found question with most answers", "question": value})
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "something went wrong"});
    });

}

module.exports = questionWithMostAnswers;