const express = require('express');
const ConnectToDB = require('./database.js');
const authentication = require('../routes/auth');
const app = express();

ConnectToDB();

app.use(authentication);

app.listen(3000, ()=>{
    console.log("listening to port 3000");
});

