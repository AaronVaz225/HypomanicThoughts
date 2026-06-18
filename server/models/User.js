//model for user
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: true },
}, { timestamps: true }

);


export default mongoose.model("User", userSchema);