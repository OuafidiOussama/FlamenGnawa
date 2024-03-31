const express = require("express");
const router = express.Router();
const { authenticate, isAdmin } = require("../middlewares/authentication");
const { getAllMembers, getMemberById, updateMember, deleteMember } = require("../controllers/memberController");

router.put("/update/:id", authenticate, isAdmin, updateMember);
router.delete("/delete/:id", authenticate, isAdmin, deleteMember);

router.get("/allmembers", getAllMembers);
router.get("/member/:id", getMemberById);

module.exports = router;
