const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (token !== undefined) {
        const user = jwt.verify(token, process.env.SECRETKEY);
        // console.log("am here");
        // console.log(user);
        req.user = user;
    } else {
        res.status(400).json({"message": "something went wrong"});
    }
    next();

}

module.exports = verifyToken;