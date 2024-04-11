const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

//mongo database connection
const db = "mongodb+srv://keshav:20ume021@cluster0.x02juvt.mongodb.net/MiniUrl";


const connectDB = async () => {
  try {
    // console.log("mongo: ", db);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
