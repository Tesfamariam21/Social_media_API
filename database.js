const mongoose = require('mongoose');

const ConnectToDB = () =>{
 mongoose.connect('mongodb://localhost/Social_media API',{

}).then(()=>{
    console.log('Connected to mongodb');
}).catch(err =>{
    console.log('Fail to connet:', err);
});
}

module.exports = ConnectToDB;