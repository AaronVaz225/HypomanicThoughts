import express from "express"
import { createPost, getAllPosts, deletePost, findPost, updatePost } from "../controllers/postController.js"
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

//Telling The Router How To Handle DIfferent Types Of HTTP Requests

router.get("/", getAllPosts);
router.get("/:id", findPost);
router.post("/", protect, createPost);
router.delete("/:id", protect, deletePost);
router.put("/:id", protect, updatePost);


export default router;