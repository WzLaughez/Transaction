const express = require('express')
const {Create,getOne,getAll,Update,Delete} = require('../../controllers/transactions/transaction_Controller');
const isLogin = require('../../middleware/isLogin');
const transactionsRoutes = express.Router();

//Router Transaction
//Create Transaction
transactionsRoutes.post("/", isLogin, Create)

//Single
transactionsRoutes.get("/:id", getOne)
//all
transactionsRoutes.get("/",getAll)
 //Update
transactionsRoutes.put("/:id",Update)
 //Delete
transactionsRoutes.delete("/:id",Delete)

module.exports = transactionsRoutes;