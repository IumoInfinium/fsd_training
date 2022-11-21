const mongoose = require('mongoose');
const {Schema, model} = mongoose;


// Defining a Schema for users
const user = new Schema({
    email : {
        type : String,
        trim:true,
        required : [true,"You need to have an email id!"],
    },
    password:{
        type:String,
        trim:true,
        required: [true,"You need a password to login in the account, duh?"]
    },
    first_name:{
        type:String,
        trim:true,
        required:[true, "You got a name or not?"]
    },
    last_name:{
        type:String,
        trim:true,
        required: [true, "You got a name or not?"]
    },
    mobile_number:{
        type:Number,
        min: 1111111111,
        max:9999999999
    },
    gender:{
        type:String,
        trim:true,
        enum:['Male','Female','Other']
    },
    created_at:{
        type:Date,
        default: Date.now
    },
    modified_at:{
        type:Date,
        default: Date.now
    }
});

// model("<collection-name-in-db>",<collection-schema-object>)
const userModel = new model("users",user);

// exporting User Model
module.exports = userModel;