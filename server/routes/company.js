const router=require('express').Router()
const Company=require('../models/company');
//const upload=require("../middlewares/upload-photo");
const fs = require('fs');
const mongoose=require('mongoose');

//mongoose.model("cities", CitiesSchema)
router.post("/company",/*upload.single('photo'),*/async(req,res)=>{
    try{
        let company=new Company();
        company.name=req.body.name;
        company.address=req.body.address;
        //company.photo=req.file;
        /*company.address=req.body.address;
        company.photo.data = "http://localhost:3000/"+req.file.filename;
        company.photo.contentType = 'image/png';
        company.avg_price=req.body.avg_price;
        //company.photo=req.body.photo;*/
        await company.save();
        
        res.json({
            status:true,
            message:"Saved"
            //p: company.photo
        });

    }
    catch(err){
        res.status(500).json({
            sucess:false,
            message:err.message
        });

    }
});
//get all companys
router.get("/company",async(req,res)=>{
    try{
        let company=await Company.find()
    
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

//GET-get a single company
router.get("/company/:id",async(req,res)=>{
    try{
        let company=await Company.findOne({_id:req.params.id});

        res.json({
            success:true,
            company:company
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});



//PUT-Update a single company
router.put("/company/:id",async(req,res)=>{
    try{
        let company=await Company.findOneAndUpdate(
        { _id:req.params.id },
        {
        $set:{
            name:req.body.name,
            address:req.body.address
            }
        },
        {upsert:true});


        res.json({
            success:true,
            updatedcompany:company
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});



//DELETE-delete a single company

router.delete('/company:id',async(req,res)=>{
    try{
        let deletecompany=await company.findOneAndDelete({_id:req.params.id});
        if(deletecompany){
            res.json({
                status:true,
                msg:"Successfully deleted"
            });
        }

    }
    catch{
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
})

    

    
module.exports=router;
