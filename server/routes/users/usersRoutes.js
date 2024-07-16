const express = require('express')
const {register,login,getAll,getOne,Update,Delete} = require('../../controllers/user/user_Controller');
const isLogin = require('../../middleware/isLogin');
const userRoutes = express.Router();

//Register
userRoutes.post("/register", register)
 //Login
userRoutes.post("/login", login)
//Detail
userRoutes.get("/", getAll)
//single
userRoutes.get("/:id", isLogin, getOne)
 //Update
userRoutes.put("/:id",Update)
 //Delete
userRoutes.delete("/:id",Delete)

module.exports = userRoutes;