const User = require("../models/user-models");

const home = async (req,res) => {
    try {
        res.status(200).send('welcome to new router');
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res) => {
    try {
        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).send({msg: "Email aleady exists"})
        }
        const registered = await User.create({username,email,phone,password})
        res.status(201).send({
            msg:"registered successfully",
            token : await registered.generateToken(),
            useId:registered._id.toString()
        })
    } catch (error) {
        // res.status(500).send({msg:'Internal server error'})
        next(error)
    }
}

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).send({msg: "Invalid credentials"})
        }
        const user = await userExist.comparePasswd(password);
        if(user){
            res.status(200).send({
                msg:"Login successful",
                token : await userExist.generateToken(),
                useId:userExist._id.toString()
            })
        }else{
            res.status(401).send({msg:'Invalid email or password'})
        }
    } catch (error) {
        res.status(500).send({msg:'Internal server error'})
    }
}

module.exports = {home, register, login};