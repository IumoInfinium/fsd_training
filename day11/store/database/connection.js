// console.log("asd");
// import {userid, passwd } from "./env.js";
const mongoose  = require("mongoose");

exports.connectToDb = async () =>{
    mongoose.connect(`mongodb+srv://iumo:union123@firstcluster.fqd4lpb.mongodb.net/store`)
    .then(()=>{
        console.log("Connected !!");
    })
    .catch((error)=>{
        console.log("Error occured..." + error.message)
    })
}
