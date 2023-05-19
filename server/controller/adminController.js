const User = require('../models/User');
const Transaction = require('../models/Transaction');

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
    user.walletBalance = 10000;
    user.totalAssets = 0;
    user.dayCount = 0;
    user.principle = 10000;
    await user.save();

    // delete all transactions
    await Transaction.deleteMany({user: userId});
    }catch(e){
        console.log(e);
    }
}

module.exports = { createUser, resetUser };