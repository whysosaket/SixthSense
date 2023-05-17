require('dotenv').config();

const jwt = require('jsonwebtoken');

JWT_SECRET = process.env.JWT_SECRET;

fetchuser = (req, res, next)=>{
    
    // Get the user from auth tokein and extract id and then add it to the req object

    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error: "Token Validation Error!"})
    }

    try{
    const data  = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
    }catch(error){
        res.status(401).send({error: "Token Validation Error!"})
    }
}

module.exports = fetchuser;