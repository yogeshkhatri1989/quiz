const serveStatic = require("serve-static");
const path = require("path");

const QuestionController = require("../app/controller/QuestionController");

module.exports = (app, config) => {

  const publicDir = path.join(__dirname, "../public");

  app.use((req, res, next) => {
    req.config = config;
    next();
  });

  app.use("/api/questions", QuestionController);

  app.use("/api", (req, res) => {
    res.send("Alive");
  });

  // Serve html app by default
  app.use("/", serveStatic(publicDir));
  
  app.use((error, req, res, next) => {
    console.error("Error ------ ", error);
    res.status(500).json({ error: error.message });
  });
};