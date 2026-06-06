import express from "express";
import "dotenv/config";
import mongoose from "mongoose";




const app = express();


//Function to connect to Database and Start server
async function startServer(){
    try {
        //Connecting to MongoDB Atlas database cluster
        await mongoose.connect(process.env.DB_URI);
        console.log("Database Connected Sucessfully!");

        //Starting Server 
        app.listen(process.env.PORT, ()=>{
            console.log(`Server running on port ${process.env.PORT}!`);
        });
    

    } catch (err) {
        console.log(`Problem Connecting to Database or Starting server. ${err}`)
    }
}

startServer();







