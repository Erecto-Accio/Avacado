const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    `mongodb+srv://toisiftasrik:${process.env.DB_PASS}@cluster1.bxa8ai0.mongodb.net/avacado-store`
  );
  console.log("DB CONNECTED");
};
module.exports = connectDb;
