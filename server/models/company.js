const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const bcrypt=require('bcrypt-nodejs');

const CompanySchema= new Schema({
    name:{type:String},
    address:{type:String},
    logo:{type:String}
});

module.exports=mongoose.model("Company",CompanySchema);