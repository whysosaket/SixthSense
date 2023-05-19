const User = require("../models/User");
const Transaction = require("../models/Transaction");
const data = require("../data.js");

const getTransactions = async (userId) => {
  try {
    let transactions = await Transaction.find({ user: userId });
    return transactions;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getTransaction = async (userId, transactionId) => {
  try {
    let transaction = await Transaction.findOne({
      _id: transactionId,
      user: userId,
    });
    return transaction;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const setTransaction = async (userId, type, amount, price, closingBalance) => {
  try {
    let transaction = new Transaction({
      user: userId,
      type: type,
      amount: amount,
      price: price,
      closingBalance: closingBalance,
    });
    await transaction.save();
    if (type == "buy") {
      return -amount * price;
    } else {
      return amount * price;
    }
  } catch (e) {
    console.log(e);
  }
};

const buyShare = async (userId, amount) => {
  try {
    let user = await User.findById(userId);
    let price = data[user.dayCount].Price;
    user.totalShares += amount;
    user.walletBalance -= amount * price;
    user.totalAssets = amount * price + user.walletBalance;
    return user.save();
  } catch (e) {
    console.log(e);
  }
};

const sellShare = async (userId, amount) => {
  try {
    let user = await User.findById(userId);
    let price = data[user.dayCount].Price;
    user.totalShares -= amount;
    user.walletBalance += amount * price;
    user.totalAssets = amount * price + user.walletBalance;
    return user.save();
  } catch (e) {
    console.log(e);
  }
};

const getQuantity = async (userId) => {
  try {
    let user = await User.findById(userId);
    let price = data[user.dayCount].Price;
    let quantity = Math.floor(user.walletBalance / price);
    return quantity;
  } catch (e) {
    console.log(e);
  }
};

const setModel = async (model) => {
  modelName = "";
  switch(model){
    case "knn":
      modelName = "knn_model.sav";
      break;
    case "adb":
      modelName = "adb_model.sav";
      break;
    case "svc":
      modelName = "svc_model.sav";
      break;
    case "rf":
      modelName = "rf_model.sav";
      break;
    case "adbsvc":
      modelName = "adb_svc_model.sav";
      break;
  }

  try{
    let model = await fetch("http://127.0.0.1:9090/change", {
      method: "PATCH",
      body: JSON.stringify({model: modelName}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    model = await model.json();
    return model.model;
  }
  catch(e){
    console.log(e);
    console.log("Error in setting model");
  }
}

module.exports = {
  getTransactions,
  getTransaction,
  setTransaction,
  buyShare,
  sellShare,
  getQuantity,
  setModel
};
