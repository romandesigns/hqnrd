// Dependencies
import mongoose from "mongoose";

// Home Schema
const HomeSchema = new mongoose.Schema(
  {
    BrandTitle: {
      type: String,
    },
    BrandSubtitle: {
      type: String,
    },
    headerImage: {
      type: Buffer,
    },
    features: {
      type: [{ title: String, description: String, img: Buffer }],
    },
    gallery: {
      title: String,
      description: String,
      images: [{ title: String, img: Buffer }],
    },
  },
  { timestamps: true }
);

const HomeModel = mongoose.model("Home", HomeSchema);
export default HomeModel;
