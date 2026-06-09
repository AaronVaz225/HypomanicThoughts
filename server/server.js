import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";


const app = express();




//-------Middleware---------
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173' // frontend origin
  }));

//-------------------Posts API-------------------------
app.use("/api/posts", postRoutes);


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



