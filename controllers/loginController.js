const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const login = (req, res) => {
    const body = req.body;
    console.log(body);
    if (Object.keys(body).length !== 0){
        if (body.email && body.password){
            userModel.findOne({"email": body.email}).then(async (value) => {
                console.log(value);
                const result = await bcrypt.compare(body.password, value.password);
                if (result){
                    const token = jwt.sign({'_id': value._id}, process.env.SECRETKEY, {
                        expiresIn: 60 * 60 * 60
                    });
                    res.status(200).json({"message": "user login successful", "token": token});
                } else {
                    res.status(400).json({"message": "user login failed"});
                }
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "something went wrong"});
            });
        } else {
            res.status(400).json({"message": "something went wrong"});
        }

    } else {
        res.status(400).json({"message": "something went wrong"});
    }

}

module.exports = login;