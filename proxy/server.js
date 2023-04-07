const express = require("express");
const app = express();
var config = require('./config.js');

app.use("/", (request, response) => {
    response.redirect(`//${config.get("URL")}`);
});

module.exports = app;