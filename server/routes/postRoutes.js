import express from "express"
import { createPost } from "../controllers/postController.js"

const router = express.Router();

//Telling The Router How To Handle DIfferent Types Of HTTP Requests

router.post("/", createPost);


export default router;