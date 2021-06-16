// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const transactions = express.Router();
const transactionsArray = require("../models/transaction");

//ROUTES
transactions.get("/", (req, res) => {
	res.json(transactionsArray);
});

// SHOW ROUTE AND REDIRECT

// CREATE ==> POST request to /bookmarks

// PUT

// DELETE

// EXPORT
module.exports = transactions;
