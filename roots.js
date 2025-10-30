import express from "express";
import { body } from "express-validator";
import { signup, login } from "../controllers/authController.js";
const router = express.Router();
router.post("/signup", [
  body("name").isLength({ min: 2 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 })
], signup);
router.post("/login", [
  body("email").isEmail(),
  body("password").exists()
], login);
export default router;
