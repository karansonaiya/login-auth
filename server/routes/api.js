const express = require("express");
const router = express.Router();
const { insert, getAll, deleteData, updateData, getDataById, handleLogin, handleVerify } = require("../controller/stdlogic");

router.post("/" , insert)
router.post("/login" , handleLogin)
router.post("/verify" , handleVerify)

//get
router.get("/" ,getAll)


//delete
router.delete("/:id" , deleteData)

//update
router.patch("/:id" , updateData)


  //single get
  router.get("/:id" , getDataById)


module.exports = router;