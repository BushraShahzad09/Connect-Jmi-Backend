import express from "express";
import { login, register, otpVerification, resendOTP, logout } from "../controllers/auth.js";
import bodyParser from "body-parser";
const encoder = bodyParser.urlencoded();
const router=express.Router();

router.post("/login",login)
router.post("/register",encoder, register)
router.post("/otpVerification",otpVerification)
router.post("/resendOTP", resendOTP)
router.post("/logout",logout)

export default router