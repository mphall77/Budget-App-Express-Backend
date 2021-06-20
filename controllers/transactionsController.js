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
transactions.get("/:index", (req, res) => {
	const { index } = req.params;
	const transaction = transactionsArray[index];
	if (transaction) {
		res.json(transaction);
	} else {
		res.redirect(`404`);
	}
});

// CREATE ==> POST request to /bookmarks
transactions.post("/", (req, res) => {
	const { body } = req;
	transactionsArray.push(body);
	const newIdx = transactionsArray.length - 1;
	res.json(transactionsArray[newIdx]);
	// res.json(transactionsArray); all of the array
});

// PUT
transactions.put("/:index", (req, res) => {
	const { index } = req.params;
	const { body } = req;
	transactionsArray[index] = body;
	res.json(transactionsArray[index]);
});

// DELETE
transactions.delete("/:index", (req, res) => {
	const { index } = req.params;
	const deletedTransaction = transactionsArray.splice(index, 1);
	res.json(deletedTransaction[0]);
});

// EXPORT
module.exports = transactions;
