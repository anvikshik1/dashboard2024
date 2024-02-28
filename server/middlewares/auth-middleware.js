const jwt = require('jsonwebtoken');
const User = require('../models/user-models');


const authMiddleware = async (req,res,next) => {
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({messag:"Unauthorized HTTP, Token not provided"})
    }
    const jwtToken = token.replace("Bearer","").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({email:isVerified.email}).select({password:0})
        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        res.status(401).json({messag:"Unauthorized valid token"})
    }
}

module.exports = authMiddleware;