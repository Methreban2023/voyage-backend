const Trip = require("../../models/Trip");



exports.getAllTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find();

    return res.status(200).json(trips);
  } catch (error) {
    return next(error);
  }
};

exports.getTripById = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const foundTrip = await Trip.findById(tripId);

    if (!foundTrip) {
      res.status(404).json({ message: "Trip not Found!" });
    } else {
      res.status(201).json(foundTrip).select("-__v").populate("cities","createdBy")
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  
exports.createTrip = async (req, res, next) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.updateTrip = async (req, res, next) => {
  try {
    await Trip.findByIdAndUpdate(req.trip.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    await Trip.findByIdAndRemove({ _id: req.trip.id });
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};