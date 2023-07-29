const express = require("express")
const router = express.Router()

// const login=require('./Routes/login')
// const signup=require('./Routes/signup')
const users=require('./Routes/users')

// require("./db/connection")

router.get("/", (req, res) => {
    res.status(200).json({
        "message": "Welcome to ProjectTree..!"
    });
  });


// router.post("/signup", signup);
// router.post("/login", login);
router.get("/profile/:username",users)

module.exports = router;
