const compression = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const morgan = require("morgan");
const cors = require("cors");

module.exports = (app, config) => {

  app.use(compression());
  app.use(morgan(config.morganLogsType));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true,
  }));

};
