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
  makeTrade();
  sendAllData();
  res.send("trade");
})
.post((req, res) => {

});

router.route("/getdata").get(async (req, res) => {
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
});

router.route("/getgraph").get(async (req, res) => {
    let graph = await Graph.find({user: userID});
    res.json({graph});
});

router.route("/changeModel").post(async (req, res) => {
    let model = req.body.model;
    setModel(model);
    res.send("Model Changed!");
});

router.route("/transactions").get(async (req, res) => {
    let transactions = await getTransactions(userID);
    res.json({transactions});
});

router.route("/transactions/:id").get(async (req, res) => {
    let transaction = await getTransaction(userID, req.params.id);
    res.send(transaction);
});

router.route("/updateday").get(async (req, res) => {
    updateDayCount(userID);
    sendAllData();
    res.send("updated");
});

router.route("/reset").get(async (req, res) => {
    await resetUser(userID);
    sendAllData();
    res.send("All Data has been reset!");
});


module.exports = router;