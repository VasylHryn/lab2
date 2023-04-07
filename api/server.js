const express = require("express");
const app = express();
require('dotenv').config();

app.get("/", (request, response) => {
    response.send(process.env.RESPONSE);
});

module.exports = app;

