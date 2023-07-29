const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = process.env.PROJECTTREE_DATABASE_URL;

main()
.then(() => console.log("Connected to MongoDB PROJECTTREE"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}