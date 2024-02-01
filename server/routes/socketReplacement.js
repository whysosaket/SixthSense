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

const {sgetGraph, sgetTransactions, sgetProfileData} = require("../controller/socketController");

router.route("/getGraph").get(async (req, res) => {
    try{
        let graph = await sgetGraph();
        return res.json({success: true, graph});
    }catch(err){
        return res.json({success: false, error: err});
    }
});

router.route("/getTransactions").get(async (req, res) => {
    try{
        let transactions = await sgetTransactions();
        return res.json({success: true, transactions});
    }catch(err){
        return res.json({success: false, error: err});
    }
});

router.route("/getProfileData").get(async (req, res) => {
    try{
        let profileData = await sgetProfileData();
        return res.json({success: true, profileData});
    }catch(err){
        return res.json({success: false, error: err});
    }
});

module.exports = router;