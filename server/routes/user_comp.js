const router=require('express').Router()
const UserComp=require('../models/user_company');
const User=require('../models/user');
const verifyToken=require('../middlewares/verify-token')
//const upload=require("../middlewares/upload-photo");
const fs = require('fs');
const mongoose=require('mongoose');


router.get("/comp",verifyToken,async(req,res)=>{
    try{
        let company=await UserComp.find({userID: req.decoded._id})
        .populate("companyID")
        .exec();
        //res.setHeader('content-type','image/png');
        res.json({
            success:true,
            company:company,
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});

router.post("/comp/:id",verifyToken,async(req,res)=>{
    try{
        let uc=new UserComp();
        uc.userID=req.decoded._id;
        uc.companyID=req.params.id
        await uc.save();
        //res.setHeader('content-type','image/png');
        res.json({
            status:true,
            message:"Added relation",
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});
module.exports=router;