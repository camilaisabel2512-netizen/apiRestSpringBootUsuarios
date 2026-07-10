const express = require("express");
const router = express.Router();

const {
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");

router.get("/profile", authMiddleware, getUser);
router.put("/profile", authMiddleware, updateUser);
router.delete("/profile", authMiddleware, deleteUser);

module.exports = router;