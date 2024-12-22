import express from "express";
import {login, signup} from "../controllers/Auth"
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

export default router;