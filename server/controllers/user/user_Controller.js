const bcrypt = require('bcryptjs');
const User = require("../../model/User");
const { errorApp, AppErr } = require('../../utils/AppError');
const generateToken = require('../../utils/generateToken');
const verifyToken = require('../../utils/verifyToken');
const { model } = require('mongoose');

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
        next(new AppErr(error.message, 500))
    }
}
const login = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        const userFound = await User.findOne({email})
        if(!userFound) return next(errorApp('Invalid login Credential',400))
        const MatchPassword = await bcrypt.compare(password, userFound.password);
        if(!MatchPassword) return next(errorApp('Invalid login Credential',400))

        res.json({
            status: "success",
            fullname : userFound.fullname,
            id : userFound._id,
            token : generateToken(userFound._id)
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}
// const getOne = async (req,res)=>{
    
//     try {
//         const userrequest = await User.findById(req.user).populate(
//             {
//                 path:'accounts',
//                 populate:{
//                     path:'transactions',
//                     model:"Transaction",
//                 }
//             }
//         );
//         res.json({
            
//             user : userrequest,
//             msg: `Detail route by ${id}`})
//     } catch (error) {
//         res.json(error)
//     }
// }

const getAll = async (req,res, next)=>{
    try {
        
        const user = await User.findById(req.user).populate(
            {
                path:'accounts',
                populate:{
                    path:'transactions',
                    model:"Transaction",
                }
            }
        );
        res.json(user)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}
const Update = async (req,res,next)=>{
    try {
        // Change Email, if exist return error email alr exist
        if(req.body.email)
        {
            const emailFound = await User.findOne({email:req.body.email})
            if(emailFound) return next(new AppErr('Email already Exist', 404))
        }
        
        // Change Password
        if(req.body.password){
            //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
            //Update the user
            const UpdateUser = await User.findByIdAndUpdate(req.user, {
                password: hashedPassword,
            },
            {
                new:true,
                runValidators:true,
            })
            return res.status(200).json({
                status:"Password Change",
                data:UpdateUser
            })
        }

        //Just Update the user
        // Find id first
        if(!(await User.findById(req.user))){
            return next(new AppErr("No account with this id", 404))
        }
        //Update
        const update = await User.findByIdAndUpdate(req.user,
            req.body,
            {
                new:true,
                runValidators:true,
            }
        )
        res.status(200).json({
            status:"success",
            data:update,
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}
const Delete = async (req,res,next)=>{
    try {
        //Jika ingin menghapus akun sendiri
        const userFound = await User.findByIdAndDelete(req.user)
        res.status(200).json({
            status:"User Deleted",
            data:null
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    register,login,getAll,Update,Delete
}