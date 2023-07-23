const { model, Schema } = require("mongoose");

const citySchema = new Schema(
  {
    name: { type: String, required: true },

    // relations
    country: { type: Schema.Types.ObjectId, ref: "Country" },
  },
  { timestamps: true }
);

module.exports = model("City", citySchema);
