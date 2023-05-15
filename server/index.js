const express = require('express');
var cors = require('cors');


// setting up express server
const app = express();
let port = process.env.PORT;
if(port == null || ""){
    port = 9000;
}

app.use(cors());

// We use this middle ware to read request body params
app.use(express.json());

// Avialable Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/link', require('./routes/link'));

app.listen(port, ()=>{
    console.log("Server started at port: "+port);
})