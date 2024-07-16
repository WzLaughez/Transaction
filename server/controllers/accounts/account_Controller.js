const Account = require("../../model/Account")
const User = require("../../model/User");
const { AppErr } = require("../../utils/AppError");



const Create = async (req,res,next)=>{
    const {name, accountType, initialBalance, notes} = req.body
    try {
        //1. Cek login
        const user = await User.findById(req.user);
        if(!user) return next(new AppErr('User not found', 404))
        //2. Create the Account
        const account = await Account.create({
            name,
            accountType,
            initialBalance,
            notes,
            createdBy:req.user,
        })
        // 3. Push the account into users accounts field
        user.accounts.push(account._id)
        // 4. resave the user
        await user.save();
        res.json({
            status:"Success",
            msg: "Create Account route",
            data : account})
    } catch (error) {
        next(error)
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
        const accounts = await Account.find().populate("transactions");
        res.json(accounts)
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