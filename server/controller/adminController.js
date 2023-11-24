const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Graph = require('../models/GraphModel');
const { monthly } = require('../user');

const createUser = async (name, email, password) => {
    let user = new User({
        name: name,
        email: email,
        password: password
    });
    await user.save();
    return user._id;
}

const resetUser = async (userId) => {
    try{
    let user = await User.findById(userId);
    user.totalShares = 0;
    user.walletBalance = monthly;
    user.totalAssets = monthly;
    user.dayCount = 0;
    user.principle = monthly;
    user.tradedToday = false;
    await user.save();

    // delete all transactions
    await Transaction.deleteMany({user: userId});
    await Graph.deleteMany({user: userId});
    console.log("reset done");
    }catch(e){
        console.log(e);
    }
}

module.exports = { createUser, resetUser };