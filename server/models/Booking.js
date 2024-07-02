const mongoose =require("mongoose")

const BookingSchema = new mongoose.Schema(
  {
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
    startDate: {
      type: String,
      require: true,
    },
    endDate: {
      type: String,
      require: true,
    },
    totalPrice: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema)
module.exports = Booking;
