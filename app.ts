import express = require("express");
import bodyParser = require("body-parser");
import morgan = require("morgan");
import mongoose = require("mongoose");
import router from "./src/api/routes/view";

export const app = express();

app.use("auth", router);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());