const User = require('../../models/user');
const validator = require('validator');
const bcrypt = require('bcrypt');


const SignUp = async (req, res)=>{
    try{
        const {username, email, password} = req.body;
        const hash = await bcrypt.hash(password, 10);
        if(validator.isEmail(email)===false){
            return res.status(401).json({error: "Invalid Email"});
        }
        
        const existingUser = await User.find({$or:[username,email]});
        if(existingUser){
            if(existingUser.username === username){
                return res.status(400).json({error: "User already exist"});
            }
            else{
                return res.status(400).json({error: "Email already exist"});
            }
        }
        const newUser = new User({username, email, password:hash});
        newUser.save();

        return res.json(newUser);
    }catch(error){
        return res.status(500).json({error: "Server Error"});
    }
}

module.exports = SignUp;