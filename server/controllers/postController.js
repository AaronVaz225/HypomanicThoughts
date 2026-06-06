import Post from "../models/Post.js"; //Post data model



//Function to create a new post
export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save(); //mongoose saves it into the database with this majic method ( .save() )!
        res.status(201).json(newPost);
    } catch(err) {
        res.status(500).json({message: "An error occured creating a new post"});
    }
};