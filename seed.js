const mongoose = require("mongoose");
const fs = require("fs");

const env = process.env.NODE_ENV || "development";
const config = require("./config/config") [env];

mongoose.Promise = global.Promise;
mongoose.connect(config.db.connectionString, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

const models_path = "./app/models";
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf(".js")) require(models_path + "/" + file);
});

const Question = mongoose.model("Question");

async function createQuestions() {
  await Question.create({ order: 1, text: "Which is the capital city of USA", answer: "Washington, D.C." });
  await Question.create({ order: 2, text: "How many states are there in USA", answer: "50" });
  await Question.create({ order: 3, text: "Which is the heavier metal of these two? Gold or Silver?", answer: "Gold" });
  await Question.create({ order: 4, text: "Which is the nearest star to planet earth? ", answer: "Sun" });
  await Question.create({ order: 5, text: "Which is the fastest animal on the land? ", answer: "Cheetah" });
  await Question.create({ order: 6, text: "Which is the most sensitive organ in our body? ", answer: "Skin" });
  await Question.create({ order: 7, text: "Which is the longest river on the earth?", answer: "Nile" });
  await Question.create({ order: 8, text: "What is the currency of Japan?", answer: "Yen" });
  await Question.create({ order: 9, text: "The kiwi is a flightless bird that lives in what country?", answer: "New Zealand" });
  await Question.create({ order: 10, text: "What is the capital of Italy?", answer: "Rome" });

  const ques = await Question.find();

  console.log(ques);
}

createQuestions().then(() => console.log("All Questions Created"));