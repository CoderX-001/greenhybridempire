import mongoose from "mongoose";

const connectDB = (uri) => {
  const options = {
    maxPoolSize: 50,
    connectTimeoutMS: 10000,
    useNewUrlParser: true,
    dbName: "greenhybridempire",
  };

  mongoose.set('strictQuery', true)
  mongoose
    .connect(uri, options)
    .then(() => console.log("Database connected..."))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
