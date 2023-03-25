import express from "express";
import { getComments, addComment} from "../controllers/comment.js";
import bodyParser from "body-parser";
const encoder = bodyParser.urlencoded();
const router=express.Router() 

router.get("/",getComments)
router.post("/",encoder, addComment)
// router.post("/logout",logout)

export default router