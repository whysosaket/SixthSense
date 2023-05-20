const User = require("../models/User");
const Transaction = require("../models/Transaction");
const Graph = require("../models/GraphModel");
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

const setTransaction = async (userId, type, amount, price, closingBalance, transactionOn) => {
  try {
    let transaction = new Transaction({
      user: userId,
      type: type,
      amount: amount,
      price: price,
      closingBalance: closingBalance,
      transactionOn: transactionOn,
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
    if(user.tradedToday) return false;
    let price = data[user.dayCount].Price;
    user.totalShares += amount;
    user.walletBalance -= amount * price;
    user.totalAssets = user.totalShares * price + user.walletBalance;
    user.tradedToday = true;
    console.log("buying share");
    await user.save();
    await setTransaction(userId, "buy", amount, data[user.dayCount].Price, user.walletBalance, data[user.dayCount].Date);
    let graph = new Graph({
      date: data[user.dayCount].Date,
      price: data[user.dayCount].Price,
      type: "buy"
  });
  await graph.save();
    return true;
  } catch (e) {
    console.log(e);
  }
};

const sellShare = async (userId, amount) => {
  try {
    let user = await User.findById(userId);
    if(user.tradedToday) return false;
    let price = data[user.dayCount].Price;
    user.totalShares -= amount;
    user.walletBalance += amount * price;
    user.totalAssets = user.totalShares * price + user.walletBalance;
    user.tradedToday = true;
    console.log("selling share");
    await user.save();
    await setTransaction(userId, "sell", amount, data[user.dayCount].Price, user.walletBalance, data[user.dayCount].Date);
    let graph = new Graph({
      date: data[user.dayCount].Date,
      price: data[user.dayCount].Price,
      type: "sell"
  });
  await graph.save();
    return true;
  } catch (e) {
    console.log(e);
  }
};

const getBuyQuantity = async (userId) => {
  try {
    let user = await User.findById(userId);
    let price = parseFloat(data[user.dayCount].Price);
    let quantity = parseInt(parseFloat(user.walletBalance) / price);
    return quantity;
  } catch (e) {
    console.log(e);
  }
};

const getSellQuantity = async (userId) => {
  try {
     let user = await User.findById(userId);
      return user.totalShares;
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

const addMoney = async (userId) => {
  try{
    let user = await User.findById(userId);
    if (user.dayCount == 0) {
      return;
    }
    // if the month is new then add 10000 to wallet where date is a string in format dd/mm/yyyy
    let prevDate = data[user.dayCount - 1].Date.split("-")[1];
    let currDate = data[user.dayCount].Date.split("-")[1];

    if (prevDate != currDate) {
      user.walletBalance += 10000;
      user.totalAssets += 10000;
      user.principle += 10000;
      await user.save();
    }
  }catch(e){
    console.log(e);
  }
};

module.exports = {
  getTransactions,
  getTransaction,
  setTransaction,
  buyShare,
  sellShare,
  getBuyQuantity,
  getSellQuantity,
  setModel,
  addMoney,
};
