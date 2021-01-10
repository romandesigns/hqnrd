// Dependencies
import mongoose from "mongoose";

// Room Schema
const RoomSchema = new mongoose.Schema(
  {
    unit: Number,
    category: String,
    description: String,
    measurements: Number,
    price: Number,
    capacity: Number,
    beds: Number,
    bedType: String,
    sofa: { type: Boolean, default: false },
    privateBathrooom: { type: Boolean, default: false },
    cookware: { type: Boolean, default: false },
    extras: {
      closet: { type: Boolean, default: false },
      cabinet: { type: Boolean, default: false },
      smartTv: { type: Boolean, default: false },
      ac: { type: Boolean, default: false },
      intercom: { type: Boolean, default: false },
      heatedWater: { type: Boolean, default: false },
      balcony: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const RoomModel = mongoose.model("room", roomSchema);
export default RoomModel;
