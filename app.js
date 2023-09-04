const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/Social_media API',{

}).then(()=>{
    console.log('Connected to mongodb');
}).catch(err =>{
    console.log('Fail to connet:', err);
});


app.listen(3000, ()=>{
    console.log("listening to port 3000");
});