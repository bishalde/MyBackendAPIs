const express = require("express")
const router = express.Router()

// const login=require('./Routes/login')
// const signup=require('./Routes/signup')
const users=require('./Routes/users')

// require("./db/connection")
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

router.get("/", (req, res) => {
    res.status(200).json({
        "message": "Welcome to ProjectTree..!"
    });
  });


// router.post("/signup", signup);
// router.post("/login", login);
router.get("/profile/:username",users)

module.exports = router;
