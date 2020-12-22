const mongoose = require("mongoose");

const connectDatabase = async () => {
  // old  method
  //   mongoose
  //     .connect(process.env.MONGO_URI, {
  //       useNewUrlParser: true,
  //       useFindAndModify: false,
  //       useCreateIndex: true,
  //       useUnifiedTopology: true,
  //     })
  //     .then(() => {
  //       console.log("MongoDb Connection Successful");
  //     })
  //     .catch((err) => console.error(err));

  //new method

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connection Successful");
  } catch (error) {
    console.error("MongoDb Connection Error", error);
  }
};

module.exports = connectDatabase;
