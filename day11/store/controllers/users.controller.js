const userModel = require("../database/models/users");

exports.getUserDetails = async (req,res) => {
    // res.send("get.user.route!!");
    try{
        const users = await userModel.find({});
        console.log(users);
        res.send({
            statusCode:200,
            message : "Users data retrieved successfully !",
            error : false,
            data : users
        });
    }
    catch(error){
        console.log(error);
        res.send({
            statusCode:500,
            message:"Error",
            error: true,
            data:null
        });
    }
}
exports.setUserDetails = async (req,res) => {
    try{
        const userData = {email, password , first_name, last_name, mobile_number, gender} = req.body;
        const newUserObj = new userModel(userData);
        newUserObj.save();
        res.send({
            statusCode:200,
            message:"update",
            error: false,
            data:userData
        });

    }
    catch(err){
        console.log(err.message);
        res.send({
            statusCode:500,
            message:err.message,
            error: true,
            data:err
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