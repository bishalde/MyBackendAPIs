const mongoose = require("mongoose");
mongoose
  .connect(process.env.PROJECTTREE_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected for PROJECT-TREE");
  })
  .catch((err) => {
    console.log(err);
  });
