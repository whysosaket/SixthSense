const User = require("../models/User");
const data = require("../data.js");

const getLevel = async (values) =>{
    let level = await fetch('http://127.0.0.1:9090/predict', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    level = await level.json();
    return level;
}

const getWalletBalance = async (userId) => {
    let user = await User.findById(userId);
    return user.walletBalance;
}

const updateWalletBalance = async (userId, amount) => {
    let user = await User.findById(userId);
    user.walletBalance += amount;
    await user.save();
}

const updateTotalAssets = async (userId, amount) => {
    let user = await User.findById(userId);
    user.totalAssets += amount;
    await user.save();
}

const getBalanceInShares = async (userId) => {
    let user = await User.findById(userId);
    return user.balanceInShares*data[user.dayCount].Price;
}

module.exports = { getWalletBalance, updateWalletBalance, updateTotalAssets, getBalanceInShares, getLevel};