const  mongoose = require("mongoose");

const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('sucessfully connected');
    } catch (error) {
        console.error("database connection failed");
        process.exit(0)
    }
}

module.exports = Connectdb;