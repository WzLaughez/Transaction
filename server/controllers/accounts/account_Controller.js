const Create = async (req,res)=>{
    try {
        res.json({msg: "Create Account route"})
    } catch (error) {
        res.json(error)
    }
}
const getOne = async (req,res)=>{
    const id = req.params.id
    
    try {
        res.json({msg: `Detail Account by ${id}`})
    } catch (error) {
        res.json(error)
    }
}
const getAll = async (req,res)=>{
    try {
        res.json({msg: "All Account route"})
    } catch (error) {
        res.json(error)
    }
}
const Update = async (req,res)=>{
    try {
        res.json({msg: "Update Account route"})
    } catch (error) {
        res.json(error)
    }
}
const Delete = async (req,res)=>{
    try {
        res.json({msg: "Delete Account route"})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    Create,getOne,getAll,Update,Delete
}