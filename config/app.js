const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
}))

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true, limit: "5mb"}));
app.use(express.static("public"));
app.use(cookieParser());

module.exports = app;