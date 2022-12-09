const mongose = require("mongoose");

const connectDB = async () => {
  try {
    await mongose.connect(process.env.MONGODB_URI, {
      //must add in order to not get any error masseges:
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connect to database successfully!");
  } catch (error) {
    console.log("Connect to database failed!");
    console.log(error);
  }
};

module.exports = connectDB;
