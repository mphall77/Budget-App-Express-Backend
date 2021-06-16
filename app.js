// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());

// MIDDLEWARE

// ROOT
app.get("/", (req, res) => {
	res.send("Budget App");
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page Not Found");
});

// EXPORT
module.exports = app;

// NOTES
// production url for API
// https://calm-journey-53565.herokuapp.com/

// https://github.com/mphall77/Budget-App-Express-Backend
// https://github.com/joinpursuit/basic-express-app/blob/main/README.md
// https://github.com/joinpursuit/budgeting-app-project-prompt
