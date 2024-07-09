const express = require('express')
const {register,login,getAll,getOne,Update,Delete} = require('../../controllers/user/user_Controller')
const userRoutes = express.Router();

//Register
userRoutes.post("/register", register)
 //Login
userRoutes.post("/login", login)
//Detail
userRoutes.get("/:id", getOne)
//Detail
userRoutes.get("/user", getAll)
 //Update
userRoutes.put("/:id",Update)
 //Delete
userRoutes.delete("/:id",Delete)

module.exports = userRoutes;