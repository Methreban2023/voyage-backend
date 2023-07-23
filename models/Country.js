const { model, Schema } = require("mongoose");

const countrySchema = new Schema(
  {
    name: { type: String, required: true },

    // relations
    cities: [{ type: Schema.Types.ObjectId, ref: "City" }],
  },
  { timestamps: true }
);

module.exports = model("Country", countrySchema);
