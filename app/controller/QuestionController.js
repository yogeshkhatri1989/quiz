const mongoose = require("mongoose");
const express = require("express");
const _ = require("underscore");

const Question = mongoose.model("Question");

const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

const router = express.Router();

router.get("/:order?", wrapAsync(getQuestions));
router.get("/:order/answer", wrapAsync(getAnswer));

async function getQuestions(req, res) {
  const order = req.params.order;
  if (order) {
    return res.send(await Question.findOne({ order }).select("order text"));
  }

  return res.send(await Question.find().select("order text"));
}

async function getAnswer(req, res) {
  const order = req.params.order;
  return res.send(await Question.findOne({ order }));
}

module.exports = router;
