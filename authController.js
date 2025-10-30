import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/index.js";
const genToken = (u) => jwt.sign({ id: u.id, email: u.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
export const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  const { name, email, password } = req.body;
  const existing = await UserModel.findOne({ where: { email } });
  if (existing) return res.status(400).json({ message: "Email already in use" });
  const hash = await bcrypt.hash(password, 10);
  const user = await UserModel.create({ name, email, password: hash });
  const token = genToken(user);
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};
export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  const { email, password } = req.body;
  const user = await UserModel.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: "Invalid credentials" });
  const token = genToken(user);
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};
