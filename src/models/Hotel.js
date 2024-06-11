import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    foodCategories: {
      type: [String],
      default: [],
    },
    menu: {
      type: [],
    },
    location: {
      type: String,
    },
    fullMenuLink: {
      type: String,
    },
    schedule: {
      type: {},
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Hotel", hotelSchema);
