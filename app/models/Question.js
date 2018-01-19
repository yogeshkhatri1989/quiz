const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  order: Number,
  text: String,
  answer: String,  
}, {
  timestamps: true
});

mongoose.model("Question", QuestionSchema);
