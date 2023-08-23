const signup = (req, res) => {
    const body = req.body;
    if (Object.keys(body).length === 0) {
        res.status(400).json({"message": "please provide some data"});
    } else {
        
    }

}