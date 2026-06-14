//File Explanation: Mongoose Model for blogposts
import mongoose from "mongoose";


const { Schema } = mongoose;

const postSchema = new Schema({
    title : String,
    body : String,
    createdOn : {type : Date, default : Date.now},
    image_Url: String,
});



export default mongoose.model("Post", postSchema);