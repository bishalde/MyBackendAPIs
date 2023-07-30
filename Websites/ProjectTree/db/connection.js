const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = process.env.PROJECTTREE_DATABASE_URL;

main()
  .then(() => console.log("Connected to MongoDB PROJECTTREE"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

async function main() {
  try {
    await mongoose.connect(mongoDB);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // You can also log the stack trace for better debugging information
    console.error(error.stack);
    process.exit(1); // Exit the process with a non-zero code to indicate an error
  }
}



