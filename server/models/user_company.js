const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const bcrypt=require('bcrypt-nodejs');

const UserCompSchema= new Schema({
    userID:{type:Schema.ObjectId,ref:'User'},
    companyID:{type:Schema.ObjectId,ref:'Company'}

    //address:{ type: Schema.Types.ObjectId,ref:"Address"}
});

module.exports=mongoose.model("UserComp",UserCompSchema);