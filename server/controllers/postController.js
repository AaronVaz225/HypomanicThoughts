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


//Function to get all posts
export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({});
        res.status(200).json(allPosts);
    } catch (err) {
        res.status(500).json({message: "An error occured getting posts."});
    }
};

//Function to delete post
export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        //For some reason, if the user is trying to delete a post that doesn't exist
        if (!deletedPost) {
            res.status(404).json({message: "No post with that id found"})
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({message: "An error occured deleting a post"});
    }
};