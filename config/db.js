const mongoose = require("mongoose")


const connectingdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb is connect..`);
        
    } catch (error) {
        console.error(`mongodb is not connect`);
        process.exit(1);
        
    };
};

module.exports = connectingdb;
