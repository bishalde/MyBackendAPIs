const express = require("express")
const cors = require('cors')
require("dotenv").config()

const errorHandler =require("./error")

const app = express()
const port = process.env.PORT || 3000


app.use(cors()) 
app.use(errorHandler)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HOMEPAGE
app.get("/", (req, res) => {
  res.status(200).json(
    {
      "message": "Welcome to MyBackendAPI's..!"
    }
  );
});

//ProjectTree
app.use("/projecttree", require("./Websites/ProjectTree/ProjectTree.js"))

app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Page Not Found"
    })
})

app.listen(port, () => {
  console.log(`MyBackendAPIS's is listening at http://localhost:${port}`);
});


module.exports = app