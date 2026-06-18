import mongoose from "mongoose";
import "dotenv/config";

export const connectDb = async () => {
    try {
          //Connecting to MongoDB Atlas database cluster
          await mongoose.connect(process.env.DB_URI);
          console.log("Database Connected Sucessfully!");
    } catch(err) {
        console.log(`Problem connecting to database: ${err}`);
    }
};

export default connectDb