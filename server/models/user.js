const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const bcrypt=require('bcrypt-nodejs');

const UserSchema= new Schema({
    name:String,
    email:{type:String,unique:true,required:true},
    password:{ type: String,required:true},
    job_role:{type:String},
    photo:{type:String}
    //address:{ type: Schema.Types.ObjectId,ref:"Address"}
});
//when user enters password, it will generate hashed version
//ay9Gn2vJgtQi0TVP
/*
UserSchema.pre("save",function(next){
    let user=this;
    if(this.isModified('password')|| this.isNew){
        //generate 10 long random characters
        bcrypt.genSalt(10,function(err,salt){
            if(err){
                return next(err)
            }
            //mix characters with user password
            bcrypt.hash(user.password,salt,null,function(err,hash){
                if(err){
                    return next(err);
                }
                user.password=hash;
                next();
            });
        });
    }
    else{
        return next();
    }
});
UserSchema.methods.comparePassword=function(password,next){
    let user=this;
    //compareSync-?
    return bcrypt.compareSync(password,user.password);
};*/
module.exports=mongoose.model("User",UserSchema);

//YuDXlGg6spYdFLX6