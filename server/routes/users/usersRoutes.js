const express = require('express')
const {register,login,getAll,Update,Delete} = require('../../controllers/user/user_Controller');
const isLogin = require('../../middleware/isLogin');
const userRoutes = express.Router();

//Register
userRoutes.post("/register", register)
 //Login
userRoutes.post("/login", login)
//Detail
userRoutes.get("/", isLogin, getAll)
//single
// userRoutes.get("/:id", isLogin, getOne)
 //Update
userRoutes.put("/",isLogin, Update)
 //Delete
userRoutes.delete("/",isLogin, Delete)

module.exports = userRoutes;