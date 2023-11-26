require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB is connected");
    } catch (e) {
        console.error("MongoDB failed to connect");
        process.exit(1);
    }
};


module.exports = connectDB;