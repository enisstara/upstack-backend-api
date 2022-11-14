require("dotenv").config();

const express = require("express");
const cors = require("cors");
const middlewares = require("./middlewares");

const app = express();

app.use(cors());
app.use("/api/v1", require("./api"));
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;