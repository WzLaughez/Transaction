const express = require('express')
const app = express();

//Middleware

//Routers
 //Router User
 //Register
app.post("/api/v1/users/register", async (req,res)=>{
    
    try {
        res.json({msg: "Register route"})
    } catch (error) {
        res.json(error)
    }
})
 //Login
app.post("/api/v1/users/login", (req,res)=>{
    
    try {
        res.json({msg: "Login route"})
    } catch (error) {
        res.json(error)
    }
})

//Detail
app.get("/api/v1/users/:id", async (req,res)=>{

    const id = req.params.id
    
    try {
        res.json({msg: `Detail route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
 //Update
app.put("/api/v1/users/:id", (req,res)=>{
    try {
        res.json({msg: "Update route"})
    } catch (error) {
        res.json(error)
    }
})
 //Delete
app.delete("/api/v1/users/:id", (req,res)=>{
    try {
        res.json({msg: "Delete route"})
    } catch (error) {
        res.json(error)
    }
})

//Router Transaction
//Create Transaction
app.post("/api/v1/transactions", async (req,res)=>{
    
    try {
        res.json({msg: "Create Transaction route"})
    } catch (error) {
        res.json(error)
    }
})

//Single
app.get("/api/v1/transactions/:id", async (req,res)=>{
    
    const id = req.params.id
    
    try {
        res.json({msg: `single Transaction route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
//all
app.get("/api/v1/transactions", async (req,res)=>{
    
    const id = req.params.id
    
    try {
        res.json({msg: `All Transaction route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
 //Update
app.put("/api/v1/transactions/:id", (req,res)=>{
    try {
        res.json({msg: "Update Transaction route"})
    } catch (error) {
        res.json(error)
    }
})
 //Delete
app.delete("/api/v1/transactions/:id", (req,res)=>{
    try {
        res.json({msg: "Delete Transaction route"})
    } catch (error) {
        res.json(error)
    }
})


 //Router Account

//Create Account
app.post("/api/v1/account", async (req,res)=>{
    
    try {
        res.json({msg: "Create account route"})
    } catch (error) {
        res.json(error)
    }
})

//Single
app.get("/api/v1/account/:id", async (req,res)=>{
    
    const id = req.params.id
    
    try {
        res.json({msg: `Single account route by ${id}`})
    } catch (error) {
        res.json(error)
    }
})
//all
app.get("/api/v1/account", async (req,res)=>{
    
    try {
        res.json({msg: `All account route`})
    } catch (error) {
        res.json(error)
    }
})
 //Update
app.put("/api/v1/account/:id", (req,res)=>{
    try {
        res.json({msg: "Update Account route"})
    } catch (error) {
        res.json(error)
    }
})
 //Delete
app.delete("/api/v1/account/:id", (req,res)=>{
    try {
        res.json({msg: "Delete Account route"})
    } catch (error) {
        res.json(error)
    }
})

//error handle

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, (req,res) =>{
    console.log(`Server listen in port ${PORT} `);
})