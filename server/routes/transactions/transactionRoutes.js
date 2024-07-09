const express = require('express')
const transactionsRoutes = express.Router();

//Router Transaction
//Create Transaction
transactionsRoutes.post("/", async (req,res)=>{
    
    try {
        res.json({msg: "Create Transaction route"})
    } catch (error) {
        res.json(error)
    }
})

//Single
transactionsRoutes.get("/:id", async (req,res)=>{
    
    const id = req.params.id
    
    try {
        res.json({msg: `single Transaction route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
//all
transactionsRoutes.get("/", async (req,res)=>{
    
    const id = req.params.id
    
    try {
        res.json({msg: `All Transaction route `})
    } catch (error) {
        res.json(error)
    }
})
 //Update
transactionsRoutes.put("/:id", (req,res)=>{
    try {
        res.json({msg: "Update Transaction route"})
    } catch (error) {
        res.json(error)
    }
})
 //Delete
transactionsRoutes.delete("/:id", (req,res)=>{
    try {
        res.json({msg: "Delete Transaction route"})
    } catch (error) {
        res.json(error)
    }
})

module.exports = transactionsRoutes;