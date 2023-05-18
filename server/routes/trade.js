const expess = require("express");
const router = expess.Router();

const data = require("../data.js");
const User = require("../models/User");
const Transaction = require("../models/Transaction");


const getLevel = async (values) =>{
    let level = await fetch('http://127.0.0.1:9090/predict', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    level = await level.json();
    return level;
}

const buyShare = async (date) => {

}

const sellShare = async (date) => {

}

router.route("/").get((req, res) => {
    let sendingData = data[0];
    delete sendingData.Date;
    delete sendingData.Price;

    let level = getLevel(sendingData);

    // if level is 1 then buy
    // if level is 0 then sell



  res.send("trade");
})
.post((req, res) => {

});


module.exports = router;