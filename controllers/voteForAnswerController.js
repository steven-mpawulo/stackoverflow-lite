const mongoose = require('mongoose');
const voteForAnswer = async (req, res) => {
    const questionId = req.params.id;
    const answerId = req.params.id2;
    const newAnswerId = mongoose.Types.ObjectId(answerId);


    if (questionId !== null && answerId !== null) {
        await questionModel.findOneAndUpdate({ "answers._id": newAnswerId }, { '$inc': {"answers.$.votes": 1} },).then((value) => {
            console.log(value);
            res.status(200).json({ "message": "answer updated", "question": value });
        }).catch((e) => {
            console.log(e);
            res.status(400).json({ "message": "failed to update answer" });
        });
    }
}