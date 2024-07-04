import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const router = express.Router();

//APIs for user to login and register by using JWT authentication 
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
