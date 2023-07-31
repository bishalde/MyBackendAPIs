const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://bishalde:bishalde@projecttreedb.gckjyxg.mongodb.net/?retryWrites=true&w=majority";

main()
.then(() => console.log("Connected to MongoDB PROJECTTREE"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });;
}