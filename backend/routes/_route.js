import express from "express";
import { createUserAccount, loginUser } from "../controllers/auth/index.js";
import getUser from "../controllers/getUser.js";
import { verifyAccessToken } from "../utils/jwt.js";

const router = express.Router();

router.post("/auth/login", loginUser);

router.post("/auth/signup", createUserAccount);

router.get("/get/user", verifyAccessToken, getUser);

export default router;
