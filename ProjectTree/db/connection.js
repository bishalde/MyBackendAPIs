const mongoose = require("mongoose");
mongoose
  .connect(process.env.PROJECTTREE_DATABASE_URL, {
  })
  .then(() => {
    console.log("MongoDB connected for PROJECT-TREE");
  })
  .catch((err) => {
    console.log(err);
  });
