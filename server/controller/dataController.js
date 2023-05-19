const User = require("../models/User");
const data = require("../data.js");

const getLevel = async (values) => {
  try {
    let level = await fetch("http://127.0.0.1:9090/predict", {
      method: "POST",
      body: JSON.stringify({data: values}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    level = await level.json();
    return level;
  } catch (e) {
    console.log(e);
    return -1;
  }
};

const getWalletBalance = async (userId) => {
  try{
  let user = await User.findById(userId);
  return user.walletBalance;
  }catch(e){
    console.log(e);
    return 0;
  }
};

const updateWalletBalance = async (userId, amount) => {
  try{
  let user = await User.findById(userId);
  user.walletBalance += amount;
  await user.save();
  }catch(e){
    console.log(e);
    return 0;
  }
};

const updateTotalAssets = async (userId, amount) => {
  try{
  let user = await User.findById(userId);
  user.totalAssets += amount;
  await user.save();
  }catch(e){
    console.log(e);
  }
};

const getBalanceInShares = async (userId) => {
  try{
  let user = await User.findById(userId);
  return user.balanceInShares * data[user.dayCount].Price;
  }catch(e){
    console.log(e);
    return;
  }
};

module.exports = {
  getWalletBalance,
  updateWalletBalance,
  updateTotalAssets,
  getBalanceInShares,
  getLevel,
};
