const express = require("express");
const { getAllCities, getCityById, createCity } = require("./city.controller");
const router = express.Router();

const { param } = require("../../utils/params/param");

router.param("userId", param);

router.get("/", getAllCities);
router.get("/:cityId", getCityById);
router.post("/", createCity);

module.exports = router;
