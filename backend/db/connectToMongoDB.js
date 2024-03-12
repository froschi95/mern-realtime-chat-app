import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await  mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
        
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit();
    };
}
export default connectToMongoDB;
