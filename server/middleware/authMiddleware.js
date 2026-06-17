import jwt from "jsonwebtoken";
import User from "../models/User.js";



const protect = async (req, res, next) => {

    const token = req.cookies.jwt;

    if (!token) {
        res.status(401);
        throw new Error("Not authorized")
    }

    //Until I add create account feature, it will always end here if it's not me (admin) ^^^

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId.select("-password")); //userId comes from the payload of the jwt, not someting directly from my db, thats why no user._Id 

    if (!user || !user.isAdmin) {
        res.status(403);
        throw new Error("Not Allowed");

    }
    
    req.user = user;
    next();

}

export default protect;