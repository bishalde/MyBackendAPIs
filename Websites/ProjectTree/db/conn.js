const mongoose = require("mongoose");
const { mongoUri, mongoTestUri, nodeEnv, mongoDevUri } = require("../../config/config");

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  let uri;
  if(nodeEnv === "Development") {
    mongoose.set('debug', true);
  }
  if (nodeEnv === "Test") {
    uri = mongoTestUri;
  } else if(nodeEnv==="Development"){
    uri=mongoDevUri;
  }
  else {
    uri = mongoUri;
  }
  console.log(uri);
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;