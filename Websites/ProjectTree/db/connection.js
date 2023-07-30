const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = process.env.PROJECTTREE_DATABASE_URL;

main()
  .then(() => console.log("Connected to MongoDB PROJECTTREE"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

async function main() {
  try {
    await mongoose.connect(mongoDB);
  } catch (error) {
    throw new Error("Failed to connect to MongoDB:", error);
  }
}
