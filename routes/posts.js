import express from "express";
import { getPosts, addPost,getOtherUserPosts} from "../controllers/post.js";
const router=express.Router() 

router.get("/",getPosts)
router.get("/:username",getOtherUserPosts)
router.post("/",addPost)

export default router