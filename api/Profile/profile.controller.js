const User = require("../../models/User");

exports.getProfile = async (req, res, next) => {
  try {
    // const { userId } = req.params;

    const profile = await User.findById(req.user._id).populate(trips);
    res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};
