const { getLevel } = require("./dataController");
const { getDayCount, updateDayCount, getDate } = require("./timeController");
const { buyShare, sellShare, getBuyQuantity, getSellQuantity, addMoney } = require("./tradeController");
const data = require("../data.js");
const Graph = require("../models/GraphModel")

const userID = "64675dd96bb5b00a806f75d5";

const makeTrade = async () => {
    try{

    await addMoney(userID);
    
    let dayCount = await getDayCount(userID);
    if(dayCount >= data.length - 1){
        console.log("All Days are over!");
        return;
    }
    let sendingData = data[dayCount];

    const {b,c,i,j,l,n,s,t,u} = sendingData;
    let senddata = [b,c,i,j,l,n,s,t,u];

    let level = await getLevel(senddata);
    console.log(level, dayCount, sendingData.Price);


    // if level is 1 then buy
    if(level == 1){
        let quantity = await getBuyQuantity(userID);
        if(quantity == 0) {
            updateDayCount(userID);
            // create graph
            let graph = new Graph({
                date: data[dayCount].Date,
                price: sendingData.Price,
            });
            await graph.save();
            return;
        }
        let n = await buyShare(userID, quantity);
        if(n == false) {
            updateDayCount(userID);
            let graph = new Graph({
                date: data[dayCount].Date,
                price: sendingData.Price,
            });
            await graph.save();
            return;
        }
    }
    // if level is 0 then sell
    else if(level == 0){
        let quantity = await getSellQuantity(userID);
        if(quantity == 0) {
            updateDayCount(userID);
            let graph = new Graph({
                date: data[dayCount].Date,
                price: sendingData.Price,
            });
            await graph.save();
            return;
        }
        let n = await sellShare(userID, quantity);
        if(n == false) {
            updateDayCount(userID);
            let graph = new Graph({
                date: data[dayCount].Date,
                price: sendingData.Price,
            });
            await graph.save();
            return;
        }
    }
    updateDayCount(userID);

    } catch (e) {
        console.log(e);
    }
    
}

module.exports = { makeTrade };