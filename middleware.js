import jwt from "jsonwebtoken";
import { UserModel } from "../models/index.js";
export default async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) return res.status(401).json({ message: "Unauthorized" });
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.user = { id: user.id, email: user.email, name: user.name };
    next();
  } catch (e) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
