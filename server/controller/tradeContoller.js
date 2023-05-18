const User = require('../models/User');
const Transaction = require('../models/Transaction');
const data = require("../data.js");

const getTransactions = async (userId) => {
    let transactions = await Transaction.find({user: userId});
    return transactions;
}

const getTransaction = async (userId, transactionId) => {
    let transaction = await Transaction.findOne({_id: transactionId, user: userId});
    return transaction;
}

const setTransaction = async (userId, type, amount, price, closingBalance) => {
    let transaction = new Transaction({
        user: userId,
        type: type,
        amount: amount,
        price: price,
        closingBalance: closingBalance
    });
    await transaction.save();
}


module.exports = { getTransactions, getTransaction, setTransaction };