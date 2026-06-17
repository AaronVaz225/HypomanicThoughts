import "dotenv/config";
import express from "express";
import connectDb from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js"


const app = express();

connectDb();


//-------Middleware---------
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,// frontend origin
    credentials: true //allows cookies to travel cross origin
  }));

app.use(cookieParser()); //puts incomming cookies into req.cookies

//------------------Login API---------------------
app.use("/api/auth", authRoutes);

//-------------------Posts API-------------------------
app.use("/api/posts", postRoutes);


app.use(notFound);
app.use(errorHandler);




//Function to connect to Database and Start server
async function startServer(){
    try {
        //Starting Server 
        app.listen(process.env.PORT, ()=>{
            console.log(`Server running on port ${process.env.PORT}!`);
        });
    

    } catch (err) {
        console.log(`Problem starting server. ${err}`)
    }
}

startServer();



