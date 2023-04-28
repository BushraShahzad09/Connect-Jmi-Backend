import express from "express";
import { getUser, getUserInfo } from "../controllers/user.js";
const router=express.Router() 

router.get("/find/:userId",getUser)
router.get("/edit/:user", getUserInfo)

export default router