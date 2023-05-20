
const User = require('../models/User');
const data = require("../data.js");

const getDayCount = async (userId) => {
    try{
    let user = await User.findById(userId);
    return user.dayCount;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const updateDayCount = async (userId) => {
    try{
    let user = await User.findById(userId);
    let dayCount = user.dayCount;
    if(dayCount >= data.length - 1){
        return -1;
    }
    user.totalAssets = user.totalShares * data[dayCount].Price + user.walletBalance;
    user.tradedToday = false;
    user.dayCount++;
    await user.save();
    return user.dayCount;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const getDate = async (userId) => {
    try{
    let user = await User.findById(userId);
    return data[user.dayCount].Date;
    }catch (e) {
        console.log(e);
        return null;
    }
}

module.exports = { getDayCount, updateDayCount, getDate };

