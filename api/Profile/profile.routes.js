const express = require("express");
const { getProfile, updateProfile } = require("./profile.controller");
const router = express.Router();
const passport = require("passport");
const { param } = require("../../utils/params/param");

// router.get("/:userId", getOneProfileById);
router.get("/", getProfile);
router.put("/", updateProfile);
module.exports = router;
