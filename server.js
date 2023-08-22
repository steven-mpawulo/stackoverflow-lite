const express = require("express");
const questionRouter = require("./routes/questionRoute");
require('dotenv').config();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5001;


app.get("/", (req, res) => {
    res.json({"message": "welcome to this server"});

});

app.use('/api/v1', questionRouter);
app.listen(port, () => {
    console.log("Server has started");
})

