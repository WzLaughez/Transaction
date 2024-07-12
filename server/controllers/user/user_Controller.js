const bcrypt = require('bcryptjs');
const User = require("../../model/User");
const { errorApp, AppErr } = require('../../utils/AppError');

const register = async (req,res,next)=>{
    const {fullname, password, email} = req.body
    try {
        //Check if email exist
        const userFound = await User.findOne({email})
        if(userFound){
            return next(errorApp('User already exist', 400))
        }
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

    //Create user
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
        });

        res.json({
            status: "Success",
            fullname:user.fullname,
            id: user.id,
            msg: "User Created"})
    } catch (error) {
        next(new Error(error))
    }
}
const login = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        const userFound = await User.findOne({email})
        if(!userFound) return next(errorApp('Invalid login Credential',400))
        const MatchPassword = await bcrypt.compare(password, userFound.password);
        if(!MatchPassword) return next(errorApp('Invalid login Credential',400))

        res.json({status: "success",
            fullname : userFound.fullname,
            id : userFound._id
        })
    } catch (error) {
        next(new Error(error))
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