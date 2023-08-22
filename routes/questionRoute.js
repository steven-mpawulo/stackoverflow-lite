const express = require("express");
const addQuestion = require("../controllers/addQuestion");
const { model } = require("mongoose");
const questionRouter = express.Router();

questionRouter.post('/questions', addQuestion);


module.exports = questionRouter;