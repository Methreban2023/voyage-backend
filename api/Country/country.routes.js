const express = require("express");
const {
  getAllCountries,
  getCountryById,
  createCountry,
} = require("./country.controller");
const router = express.Router();

const { param } = require("../../utils/params/param");

router.param("userId", param);

router.get("/", getAllCountries);
router.get("/:countryId", getCountryById);
router.post("/", createCountry);

module.exports = router;
