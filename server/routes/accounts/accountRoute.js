const express = require('express')
const accountRoutes = express.Router();
const {Create,getOne,getAll,Update,Delete} = require('../../controllers/accounts/account_Controller')
 //Router Account

//Create Account
accountRoutes.post("/", Create)
//all
accountRoutes.get("/", getAll)
//Single
accountRoutes.get("/:id", getOne)
 //Update
accountRoutes.put("/:id", Update)
 //Delete
accountRoutes.delete("/:id", Delete)

module.exports = accountRoutes;