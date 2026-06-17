//This is just for putting an admin in the server. 
import "dotenv/config";
import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcrypt";


const createAdmin = async () => {

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB Connected")


        
        const existing = await User.findOne({email: process.env.ADMIN_EMAIL});
        if (existing) {
            console.log("Admin Already Exists");
            process.exit();
        }

        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        await User.create({
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            idAdmin: true,
        });

        console.log("Admin Creates");
        process.exit();
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
};

createAdmin();