const  mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userScheema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

userScheema.pre('save',async function () {
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_passwd = await bcrypt.hash(user.password, saltRound);
        user.password = hash_passwd
    } catch (error) {
        next(error)
    }
})


const User = new mongoose.model("User", userScheema);
 module.exports = User;