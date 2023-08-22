const express = require("express");
const addQuestion = require("../controllers/addQuestion");
const questionRouter = express.Router();

questionRouter.post('/questions', addQuestion);