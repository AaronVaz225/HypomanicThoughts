import express from "express"
import { createPost, getAllPosts, deletePost, findPost } from "../controllers/postController.js"

const router = express.Router();

//Telling The Router How To Handle DIfferent Types Of HTTP Requests

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", findPost)
router.delete("/:id", deletePost);


export default router;