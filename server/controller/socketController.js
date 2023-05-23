
const data = require("../data.js");
const User = require("../models/User");
const Graph = require("../models/GraphModel");
const { getTransactions} = require("../controller/tradeController");
const {io} = require("socket.io-client");



const userID = "64675dd96bb5b00a806f75d5";

const socket = io.connect("http://localhost:9001");

const sendAllData = async ()=>{
    socket.emit("getProfileData");
    socket.emit("getTransactions");
    socket.emit("getGraph");
}

const sgetProfileData = async ()=>{
    let user = await User.findById(userID);
    let dayCount = user.dayCount;
    let date = data[dayCount].Date;
    let pricePerShare= data[dayCount].Price;
    let walletBalance = user.walletBalance
    let totalAssets = user.totalAssets
    let totalShares = user.totalShares;
    let principle = user.principle;
    let profit = walletBalance + (pricePerShare * totalShares) - principle;
    let SIP =  dayCount==0?0:(data[dayCount].SIP*pricePerShare);
    let profitPercent = (profit / user.principle) * 100;
    let profitSIP =  dayCount==0?0:(profit +principle - (pricePerShare * data[dayCount].SIP));
    

    let sendData = { date, walletBalance, totalAssets, totalShares, pricePerShare, principle, profit,SIP, profitPercent, profitSIP };
    return sendData;
}

const sgetGraph = async ()=>{
    let graph = await Graph.find({});
    return graph;
}

const sgetTransactions = async ()=>{
    let transactions = await getTransactions(userID);
    return transactions;
}



module.exports = { sgetProfileData, sgetGraph, sgetTransactions, sendAllData };