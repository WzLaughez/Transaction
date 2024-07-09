const express = require('express')
const userRoutes = express.Router();

//Register
userRoutes.post("/register", async (req,res)=>{
    
    try {
        res.json({msg: "Register route"})
    } catch (error) {
        res.json(error)
    }
})
 //Login
userRoutes.post("/login", (req,res)=>{
    
    try {
        res.json({msg: "Login route"})
    } catch (error) {
        res.json(error)
    }
})

//Detail
userRoutes.get("/:id", async (req,res)=>{

    const id = req.params.id
    
    try {
        res.json({msg: `Detail route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
 //Update
userRoutes.put("/:id", (req,res)=>{
    try {
        res.json({msg: "Update route"})
    } catch (error) {
        res.json(error)
    }
})
 //Delete
userRoutes.delete("/:id", (req,res)=>{
    try {
        res.json({msg: "Delete route"})
    } catch (error) {
        res.json(error)
    }
})

module.exports = userRoutes;