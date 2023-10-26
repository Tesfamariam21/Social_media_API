const express = require('express');
const ConnectToDB = require('./database.js');
const authentication = require('./routes/auth');
const bodyparser = require('body-parser');
const media = require('./routes/media.js');
const app = express();

ConnectToDB();

app.use(bodyparser.json());
app.use(authentication);
app.use('/media', media);

app.listen(3000, ()=>{
    console.log("listening to port 3000");
});

