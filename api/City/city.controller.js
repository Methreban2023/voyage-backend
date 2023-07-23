const City = require("../../models/City");

const getAllCities = async (req, res, next) => {
  try {
    console.log(req.user);

    const city = await City.find();
    return res.status(200).json(city);
  } catch (error) {
    next(error);
  }
};

const getCityById = async (req, res, next) => {
  try {
    const { cityId } = req.params;
    const city = await City.findById(cityId);
    if (city) {
      return res.status(200).json(city);
    }
    res.status(404).json({ message: "City not found" });
  } catch (error) {
    next(error);
  }
};

const createCity = async (req, res, next) => {
  try {
    const newCity = await City.create(req.body);
    return res.status(201).json({ newCity });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getCityById, getAllCities, createCity };
