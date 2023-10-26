const express = require('express');
const ConnectToDB = require('./database.js');
const authentication = require('./routes/auth');
const media = require('./routes/media.js');
const app = express();

ConnectToDB();

app.use(authentication);
app.use('/media',media);

app.listen(3000, ()=>{
    console.log("listening to port 3000");
});

