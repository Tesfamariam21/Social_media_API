const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const Secratekey = process.env.secrate_key;

const Login = async (req, res)=>{
    try{
        const {username, password} = req.body;
        const user = await User.find({username});
        if(!user){
            return res.status(404).json({error: "User not found"});
        }
        const Ispasswordvalid = bcrypt.compare(password, user.password);
        if(!Ispasswordvalid){
            return res.status(401).json({error: "Invalid password"});
        }
        const token = jwt.sign({userId:user._id}, Secratekey, {expiresIn: '30d'});
        return res.json(token);
    }catch(error){
        return res.status.json({error: "Server error"});
    }

}

module.exports = Login;