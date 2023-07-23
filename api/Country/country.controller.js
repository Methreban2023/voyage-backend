const Country = require("../../models/Country");

const getAllCountries = async (req, res, next) => {
  try {
    console.log(req.user);

    const country = await Country.find();
    return res.status(200).json(country);
  } catch (error) {
    next(error);
  }
};

const getCountryById = async (req, res, next) => {
  try {
    const { countryId } = req.params;
    const country = await Country.findById(countryId);
    if (country) {
      return res.status(200).json(country);
    }
    res.status(404).json({ message: "Country not found" });
  } catch (error) {
    next(error);
  }
};

const createCountry = async (req, res, next) => {
  try {
    const newCountry = await Country.create(req.body);
    return res.status(201).json({ newCountry });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getCountryById, getAllCountries, createCountry };
