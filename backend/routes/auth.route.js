import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword
} from "../controllers/auth.controller.js";

const router = express.Router();

// router.get("/check-auth", verifyToken, checkAuth); //! work on later stopped at 1.47.00

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;
