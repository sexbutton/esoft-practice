const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());

const PORT = 3001;

var users = [
  { username: "admin", password: "12345" },
  { username: "foo", password: "bar" },
  { username: "user", password: "test" },
];
