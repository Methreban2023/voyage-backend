const { model, Schema } = require("mongoose");

const tripSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    tripDate: Date,
    image: [
      {
        type: String,
        default: "/",
      },
    ],
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    // relations
    cities: [{ type: Schema.Types.ObjectId, ref: "City" }],
  },
  { timestamps: true }
);

module.exports = model("Trip", tripSchema);
