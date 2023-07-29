const express = require("express")
const cors = require('cors')
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000


app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//HOMEPAGE MYBACKENDAPI's ---------------------
app.get("/", (req, res) => {
    res.status(200).json(
      {
        "message": "Welcome to MyBackendAPI's..!"
      }
    );
  });
  

  app.listen(port, () => {
    console.log(`MyBackendAPIS's is listening at ${process.env.WEB_URL}`);
  });