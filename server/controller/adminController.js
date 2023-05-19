const User = require('../models/User');

const createUser = async (name, email, password) => {
    let user = new User({
        name: name,
        email: email,
        password: password
    });
    await user.save();
    return user._id;
}

module.exports = { createUser };