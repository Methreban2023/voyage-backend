const User = require("../../models/User");

exports.getProfile = async (req, res, next) => {
  try {
    const profile = await User.findById(req.user._id)
      .populate("trips")
      .select("-password");
    res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};
exports.updateProfile = async (req, res, next) => {
  try {
    const profile = await User.findByIdAndUpdate(req.user._id, req.body);
    return res.status(204).json(profile);
  } catch (error) {
    next(error);
  }
};
