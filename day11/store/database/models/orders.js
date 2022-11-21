const mongoose = require("mongoose");
const {Schema, model} = mongoose;

// Schema for Order collection
const order = new Schema({
    user_id:{
        type:String,
        trim:true,
        required:[true,"User id is necessary for a order!"]
    },
    amount:{
        type:Number,
        required:[true,"Someone should pay some amount to get the order!"]
    },
    payment_id:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date,
        default:Date.now
    }
})

// Framing the order Scheme to a model
const orderModel = new model("orders",order);

// Export the order Model
module.exports = orderModel;