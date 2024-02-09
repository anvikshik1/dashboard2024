const User = require("../models/user-models");
const bcrypt = require('bcrypt');


const home = async (req,res) => {
    try {
        res.status(200).send('welcome to new router');
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res) => {
    try {
        const {username,email,password,phone} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).send({msg: "Email aleady exists"})
        }
        const registered = await User.create({username,email,password,phone})
        res.status(201).send({registered})
    } catch (error) {
        res.status(404).send({msg:'Internal server error'})
    }
}

module.exports = {home, register};