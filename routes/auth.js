import express from "express";
import { login, register, logout } from "../controllers/auth.js";
import bodyParser from "body-parser";
const encoder = bodyParser.urlencoded();
const router=express.Router() 

router.post("/login",login)
router.post("/register",encoder, register)
router.post("/logout",logout)

export default router