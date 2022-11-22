const mongoose = require("mongoose");
const {Schema, model}  = mongoose;

const addressSchema = new Schema({
    street : String,
    city: String,
    pincode : Number
});

const test = new Schema({
    name : {type: String, required:true},
    mobile_number : {type: Number},
    dob : {type: Date},
    address : addressSchema
});