const userModel = require("../database/models/users");

exports.getUserDetails = async (req,res) => {
    // res.send("get.user.route!!");
    try{
        const users = await userModel.find({});
        console.log(users);
        res.send({
            "statusCode":200,
            "message":"Users data",
            "error" : false,
            "data":users
        });
    }
    catch(error){
        console.log(error.message);
        res.send({
            "statusCode":500,
            "message":"Error",
            "error": true,
            "data":null
        });
    }
}
exports.setUserDetails = async (req,res) => {
    try{
        const userData = req.body;
        console.log(req);
        res.send({
            "statusCode":200,
            "message":"update",
            "error": false,
            "data":userData
        });
    }
    catch(error){
        console.log(error.message);
        res.send({
            "statusCode":500,
            "message":error.message,
            "error": true,
            "data":null
        });
    }
}

exports.findUserDetails = async (req,res) => {
    try{
        const user = await userModel.find({
            first_name: "Yash"
        })
        res.send(user);
    }
    catch(error){
        console.log("Error :" + error.message);
        res.send(error.message);
    }
}