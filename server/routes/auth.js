const router=require('express').Router();
const User=require('../models/user');
const Comp=require('../models/user_company');
const jwt=require('jsonwebtoken');
const verifyToken=require('../middlewares/verify-token')
require("dotenv").config();
/*Signup Router*/
//working
router.post('/auth/signup',async(req,res)=>{
    
    if(!req.body.email || !req.body.password){
        res.json({success:false,message:"Please enter email or password"});

    }
    else{
        try{
            let newUser=new User();
            //let useComp=new UserComp();
            newUser.name=req.body.name;
            newUser.email=req.body.email;
            newUser.password=req.body.password;
            //newUser.job_role=req.body.job_role;

            

            await newUser.save();
            let token=jwt.sign(newUser.toJSON(),process.env.SECRET,{
                expiresIn:604800 //1 week
            });
            res.json({
                success:true,
                token:token,
                message:"Successfully created a new user",
            })
        }

        catch(err){

            res.status(500).json({
            success:false,
            message:err.message
            });
        }

    }
}
);

/*Profile Route*/
//check this one by sending a valid token in header as "Authorization"
//working-checked
//get details of the user
router.get("/auth/user",verifyToken,async(req,res)=>{
    try{
        let foundUser=await User.findOne({ _id: req.decoded._id });
        
        if(foundUser){
            res.json({
                success:true,
                user:foundUser,
              

            });
        }
    }
    catch(err){
        res.status(500).json({
        success:false,
        message:err.message
        });

    }
});


//Login route
//foundUser not working
router.post("/auth/login",async(req,res)=>{
    let a=1
    try
    {

        let foundUser=await User.findOne({email:req.body.email});

        //if email does not exists
        if(!foundUser)
        {
            res.status(403).json({
                success:false,
                message:"Authentication failed,User not found"
        });

        }
        //if email exists
        else
        {   //if password matches,return the token
            if(a==1)//foundUser.comparePassword(req.body.password))
            {
                let token=jwt.sign(foundUser.toJSON(),process.env.SECRET,{
                    expiresIn:604800
                })
                res.json({
                    success:true,
                    token:token,
                            

                });

            }
            //if password does not match
            else
            {
                res.status(403).json({
                    success:false,
                    message:"Authentication failed,Wrong password "
                });
            }
        }
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:err.message
            });

    }
});
module.exports=router;