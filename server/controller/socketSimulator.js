
const data = require("../data.js");
const User = require("../models/User");
const Graph = require("../models/GraphModel");
const { getTransactions} = require("../controller/tradeController");
const {io} = require("socket.io-client");
const userid = require("../user.js");

const userID = userid.userid;

// Predictions
const predict = () => {
    let random = Math.random();
    if(random > 0.25) return 1;
    else return 0;
}

module.exports = {predict};