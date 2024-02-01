const expess = require("express");
const router = expess.Router();

const {createUser} = require("../controller/adminController")


router.route("/create").get(async(req, res)=>{
    const d = await createUser("saket", "test", "test");
    return res.send(d);
})

router.route("/").get((req, res)=>{
    return res.send("Hiii")
});


module.exports = router;