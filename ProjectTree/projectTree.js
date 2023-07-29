const express = require("express")
const router = express.Router()

require("./db/connection")

const users = require("./routes/users")

router.get("/", (req, res) => {
    res.status(200).json({
        "message": "Welcome to ProjectTree..!"
    });
  });


router.get("/profile/:username",users)

module.exports = router;