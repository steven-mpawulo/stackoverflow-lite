const express = require("express");
const questionRouter = require("./routes/questionRoute");
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const port = process.env.PORT || 5001;


app.get("/", (req, res) => {
    res.json({"message": "welcome to this server"});

});

app.use('/api/v1', questionRouter);

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB connected");
    app.listen(port, () => {
        console.log("Server has started");
    });
} );


