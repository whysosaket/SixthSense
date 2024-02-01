const expess = require("express");
const router = expess.Router();

const data = require("../data.js");
const User = require("../models/User");
const Graph = require("../models/GraphModel");

const { updateDayCount} = require("../controller/timeController");
const { getTransactions, getTransaction, setModel } = require("../controller/tradeController");
const {makeTrade} = require("../controller/mainController");
const {resetUser} = require("../controller/adminController");
const {sendAllData} = require("../controller/socketController");
const userid = require("../user.js");

const userID = userid.userid;


router.route("/").get( async (req, res) => {
    try{
  makeTrade();
//   sendAllData();
  return res.send("trade");
    }catch(err){
        return res.json({err});
    }
});

router.route("/getdata").get(async (req, res) => {

    try{
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
    return res.json({data: sendData});
    }catch(err){
        return res.json({err});
    }
});

router.route("/getgraph").get(async (req, res) => {
    try{
    let graph = await Graph.find({user: userID});
    return res.json({graph});
    }catch(err){
        return res.json({err});
    }
});

router.route("/changeModel").post(async (req, res) => {
    try{
    let model = req.body.model;
    setModel(model);
    return res.send("Model Changed!");
    }catch(err){
        return res.json({err});
    }
});

router.route("/transactions").get(async (req, res) => {
    try{
    let transactions = await getTransactions(userID);
    return res.json({transactions});
    }catch(err){
        return res.json({err});
    }
});

router.route("/transactions/:id").get(async (req, res) => {
    try{
    let transaction = await getTransaction(userID, req.params.id);
    return res.send(transaction);
    }catch(err){
        return res.json({err});
    }
});

router.route("/updateday").get(async (req, res) => {
    try{
    updateDayCount(userID);
    sendAllData();
    return res.send("updated");
    }catch(err){
        return res.json({err});
    }
});

router.route("/reset").get(async (req, res) => {
    try{
    await resetUser(userID);
    sendAllData();
    return res.send("All Data has been reset!");
    }catch(err){
        return res.json({err});
    }
});


module.exports = router;