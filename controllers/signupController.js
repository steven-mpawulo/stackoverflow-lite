const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    const body = req.body;
    if (Object.keys(body).length === 0) {
        res.status(400).json({"message": "please provide some data"});
    } else {
        if (body.username && body.password && body.email){
            const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = userModel({
            username: body.username,
            email: body.email,
            password: hashedPassword,
        });

        await user.save().then((value) => {
            console.log(value);
            const token = jwt.sign({'_id': value._id}, process.env.SECRETKEY, {
                expiresIn: 60 * 60 * 60
            });
            res.status(200).json({
                "message": "accounted created",
                "user details":value,
                "token": token
            });
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
        } else {
            res.status(400).json({"message": "something went wrong"});
        }
        
        
    }

}

module.exports = signup;