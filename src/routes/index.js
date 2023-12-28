import express from "express";
import { postPrompt } from "../controllers/GPT.js";

const router = express.Router();
router.post("/send-prompt", postPrompt);

export default router;
