"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var view_1 = require("./src/api/routes/view");
exports.app = express();
exports.app.use("auth", view_1.default);
exports.app.use(morgan("dev"));
exports.app.use(bodyParser.urlencoded({ extended: false }));
exports.app.use(bodyParser.json());
//# sourceMappingURL=app.js.map