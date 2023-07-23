const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    firstName: String,
    lastName: String,
    bio: String,
    password: { type: String, required: true },
    image: {
      type: String,
      default: "/",
    },

    // relations
    trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
