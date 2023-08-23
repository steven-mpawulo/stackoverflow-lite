const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const signup = async (req, res) => {
    const body = req.body;
    if (Object.keys(body).length === 0) {
        res.status(400).json({"message": "please provide some data"});
    } else {
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = userModel({
            username: body.username,
            email: body.email,
            password: hashedPassword,
        });

        await user.save().then((value) => {
            console.log(value);
            res.status(200).json({
                "message": "accounted created",
                "user details":value,
            });
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
        
    }

}

module.exports = signup;