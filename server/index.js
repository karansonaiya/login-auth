const express = require("express");
const app = express();
app.use(express.json());
var cors = require('cors')

app.use(cors())

const dbconnect = require("./config/dbconnect");

const api = require("./routes/api");

  dbconnect().then(() => console.log('Connected!'));

 


  

  
app.use("/student" , api)
  



  app.listen(3030 , () => {
    console.log("Server is running on port 3030")
  })