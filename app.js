const express = require('express');
const ConnectToDB = require('./database.js');

const app = express();

ConnectToDB();

app.listen(3000, ()=>{
    console.log("listening to port 3000");
});