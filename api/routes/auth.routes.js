import express from "express";
import { login , logout, register } from "../controller/auth.controller.js";

const router = express.Router()

router.post("/register",register);

router.post("/login",register);

router.post("/login",register);


export default router;