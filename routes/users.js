import express from "express";
import { getUser, getUserInfo, getPostsNumber } from "../controllers/user.js";
const router=express.Router() 

router.get("/find/:userId",getUser)
router.get("/edit/:user", getUserInfo)
router.get("/postno/:user", getPostsNumber)

export default router