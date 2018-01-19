const http = require("http");
const fs = require("fs");

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const env = app.settings.env;

const config = require("./config/config")[env];

process.on("unhandledRejection", error => {
  console.error("unhandledRejection", error);
});

mongoose.Promise = global.Promise;
mongoose.connect(config.db.connectionString, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

// Bootstrap models
var modelsPath = __dirname + "/app/models";
fs.readdirSync(modelsPath).forEach(file => {
  file.endsWith(".js") && require(modelsPath + "/" + file);
});

require("./config/express")(app, config);
require("./config/routes")(app, config);

const httpServer = http.createServer(app).listen(config.httpPort, () => {
  /* eslint-disable no-console */
  console.log(new Date(), ": httpServer listening on", httpServer.address());
  /* eslint-enable no-console */
});

