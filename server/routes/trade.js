const expess = require("express");
const router = expess.Router();

const data = require("../data.js");
const User = require("../models/User");
const Transaction = require("../models/Transaction");

const { getLevel, getWalletBalance, updateWalletBalance, updateTotalAssets, getBalanceInShares } = require("../controller/dataController");
const { getDayCount, updateDayCount, getDate } = require("../controller/timeController");
const { getTransactions, getTransaction, setTransaction, buyShare, sellShare } = require("../controller/tradeController");

const userID = "Testid";

router.route("/").get( async (req, res) => {
    let dayCount = await getDayCount(userID);
    let sendingData = data[dayCount];
    delete sendingData.Date;
    delete sendingData.Price;

    let level = getLevel(sendingData);

    // if level is 1 then buy
    if(level == 1){
        buyShare(userID, 1);
        setTransaction(userID, "buy", 1, data[dayCount].Price, await getWalletBalance(userID));
    }
    // if level is 0 then sell
    else if(level == 0){
        sellShare(userID, 1);
        setTransaction(userID, "sell", 1, data[dayCount].Price, await getWalletBalance(userID));
    }

    updateDayCount(userID);
  res.send("trade");
})
.post((req, res) => {

});

router.route("/transactions").get(async (req, res) => {
    let transactions = await getTransactions(userID);
    res.send(transactions);
});

router.route("/transactions/:id").get(async (req, res) => {
    let transaction = await getTransaction(userID, req.params.id);
    res.send(transaction);
});

router.route("/updateday").get(async (req, res) => {
    updateDayCount(userID);
    res.send("updated");
});


module.exports = router;