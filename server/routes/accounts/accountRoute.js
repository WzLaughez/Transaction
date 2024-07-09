const express = require('express')
const accountRoutes = express.Router();
 //Router Account

//Create Account
accountRoutes.post("", async (req,res)=>{
    
    try {
        res.json({msg: "Create account route"})
    } catch (error) {
        res.json(error)
    }
})

//Single
accountRoutes.get("/:id", async (req,res)=>{
    
    const id = req.params.id
    
    try {
        res.json({msg: `Single account route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
//all
accountRoutes.get("", async (req,res)=>{
    
    try {
        res.json({msg: `All account route`})
    } catch (error) {
        res.json(error)
    }
})
 //Update
accountRoutes.put("/:id", (req,res)=>{
    try {
        res.json({msg: "Update Account route"})
    } catch (error) {
        res.json(error)
    }
})
 //Delete
accountRoutes.delete("/:id", (req,res)=>{
    try {
        res.json({msg: "Delete Account route"})
    } catch (error) {
        res.json(error)
    }
})

module.exports = accountRoutes;