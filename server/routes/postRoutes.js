import express from "express"
import { createPost, getAllPosts } from "../controllers/postController.js"

const router = express.Router();

//Telling The Router How To Handle DIfferent Types Of HTTP Requests


router.post("/", createPost);
router.get("/", getAllPosts);


export default router;