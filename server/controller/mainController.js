const { getLevel, getWalletBalance, updateWalletBalance, updateTotalAssets, getBalanceInShares } = require("./dataController");
const { getDayCount, updateDayCount, getDate } = require("./timeController");
const { getTransactions, getTransaction, setTransaction, buyShare, sellShare, getQuantity, setModel } = require("./tradeController");
const data = require("../data.js");

const userID = "64675dd96bb5b00a806f75d5";

const makeTrade = async () => {
    try{
    let dayCount = await getDayCount(userID);
    let sendingData = data[dayCount];
    delete sendingData.Date;
    delete sendingData.Price;

    const {b,c,i,j,l,n,s,t,u} = sendingData;
    let senddata = [b,c,i,j,l,n,s,t,u];

    let model = await setModel("svc");
    return;

    let level = await getLevel(senddata);
    let quantity = await getQuantity(userID);
    let walletBalance = await getWalletBalance(userID);

    // if level is 1 then buy
    if(level == 1){
        await buyShare(userID, 1);
        await setTransaction(userID, "buy", quantity, data[dayCount].Price, walletBalance);
    }
    // if level is 0 then sell
    else if(level == 0){
        await sellShare(userID, 1);
        await setTransaction(userID, "sell", quantity, data[dayCount].Price, walletBalance);
    }
    // updateDayCount(userID);

    } catch (e) {
        console.log(e);
    }
    
}

module.exports = { makeTrade };