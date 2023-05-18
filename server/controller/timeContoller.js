
const User = require('../models/User');
const data = require("../data.js");

const getDayCount = async (userId) => {
    let user = await User.findById(userId);
    return user.dayCount;
}

const updateDayCount = async (userId) => {
    let user = await User.findById(userId);
    user.dayCount++;
    await user.save();
}

const getDate = async (userId) => {
    let user = await User.findById(userId);
    return data[user.dayCount].Date;
}

module.exports = { getDayCount, updateDayCount, getDate };

