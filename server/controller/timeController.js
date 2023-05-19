
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

