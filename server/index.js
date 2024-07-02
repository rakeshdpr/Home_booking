const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const bookingRoutes=require("./routes/Booking.js")
const listingRoutes=require("./routes/listing.js");
// const bookingRoutes=require("./routes/booking.js")
const userRoutes=require("./routes/user.js")

app.use(cors())

app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/properties",listingRoutes);
app.use("/Booking",bookingRoutes);
app.use("/users",userRoutes)

// mongoose setup

const PORT  = 3001;

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Dream-Nest",
    useNewUrlParser:  true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Database");
    app.listen(PORT, () => {
      console.log(`Server Port: ${PORT}`);
    });
  })

  .catch((error) => console.log({ message: error.message }));
