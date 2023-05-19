const expess = require("express");
const router = expess.Router();

const data = require("../data.js");
const User = require("../models/User");
const Transaction = require("../models/Transaction");

const { getLevel, getWalletBalance, updateWalletBalance, updateTotalAssets, getBalanceInShares } = require("../controller/dataController");
const { getDayCount, updateDayCount, getDate } = require("../controller/timeController");
const { getTransactions, getTransaction, setTransaction, buyShare, sellShare, setModel } = require("../controller/tradeController");
const {makeTrade} = require("../controller/mainController");
const {resetUser} = require("../controller/adminController");

const userID = "64675dd96bb5b00a806f75d5";

router.route("/").get( async (req, res) => {
  makeTrade();
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

    let sendData = { date, walletBalance, totalAssets, totalShares, pricePerShare, principle };
    return res.json({data: sendData});
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
    res.send("updated");
});

router.route("/reset").get(async (req, res) => {
    await resetUser(userID);
    res.send("All Data has been reset!");
});


module.exports = router;