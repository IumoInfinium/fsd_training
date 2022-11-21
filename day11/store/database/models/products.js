const mongoose = require("mongoose");
const {Schema, model} = mongoose;

// root URL for storage service
const rootURL = "https://storage-service.com/"

// Sub-Schema inside product Schema for different photos and description about the product
const collectionSchema = new Schema({
    img:{
        type:String,
        trim:true,
        // get:v => `${root}${v}`
    },     
    desc:{
        type: String,
        trim:true,
        maxLength : 100
    }
});


// Schema for products
const product = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true,
        maxLength:1000
    },
    sku:{
        trim:true,
        type:String
    },
    category_id:{
        type:Number
    },
    price:{
        type:Number,
        min:1
    },
    collection: [{ img: String, desc: String }],
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['active','not active']
    }
})

// Framing the Schema in a model
const productModel = new model("products",product);

// exporting the product Model
module.exports = productModel;