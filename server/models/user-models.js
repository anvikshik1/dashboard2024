const  mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userScheema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
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
        user.password = hash_passwd;
    } catch (error) {
        next(error)
    }
});

userScheema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },process.env.JWT_SECRET_KEY,{expiresIn:'2d'});
    } catch (error) {
        console.error(error);
    }
}

//compare the password

userScheema.methods.comparePasswd = function (password) {
    return bcrypt.compare(password, this.password);
}


const User = new mongoose.model("User", userScheema);
 module.exports = User;