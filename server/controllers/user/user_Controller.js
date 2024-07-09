const register = async (req,res)=>{
    try {
        res.json({msg: "Register route"})
    } catch (error) {
        res.json(error)
    }
}
const login = async (req,res)=>{
    try {
        res.json({msg: "Login route"})
    } catch (error) {
        res.json(error)
    }
}
const getOne = async (req,res)=>{
    const id = req.params.id
    
    try {
        res.json({msg: `Detail route by ${id}`})
    } catch (error) {
        res.json(error)
    }
}
const getAll = async (req,res)=>{
    try {
        res.json({msg: "getAll route"})
    } catch (error) {
        res.json(error)
    }
}
const Update = async (req,res)=>{
    try {
        res.json({msg: "Register route"})
    } catch (error) {
        res.json(error)
    }
}
const Delete = async (req,res)=>{
    try {
        res.json({msg: "Register route"})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    register,login,getOne,getAll,Update,Delete
}