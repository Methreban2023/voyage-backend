const express = require("express");
const {
  getAllTrips,
  createTrip,
  fetchTrip,
  updateTrip,
  deleteTrip,
  
  getTripById ,
} = require("./trip.controller");
const router = express.Router();
const passport = require("passport");
const upload = require("../../middlewares/uploader");
router.param("tripyId", async (req, res, next, tripId) => {
  try {
    const foundtrip = await fetchTrip(tripId);
    if (!foundtrip)
      return next({ status: 404, message: "trip not found" });
    req.trip = foundtrip;
    next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", getAllTrips);
router.get("/:tripId",getTripById )
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createTrip
);

router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  updateTrip
);
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  deleteTrip
);

module.exports = router;