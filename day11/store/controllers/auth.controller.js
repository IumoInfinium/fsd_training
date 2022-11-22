const userModel = require("../database/models/users");
const crypto = require("node:crypto");
const jwt = require("jsonwebtoken");


exports.signUp = async (req,res) => {
    const userData = {email, password, first_name, last_name, mobile_number, gender} = req.body;
    
    const userExists = userModel.findOne({
        email : userData.email
    })
    if(userExists){
        res.send({
            statusCode : 200,
            message : "User already exists! Please login !!",
            error : false,
            data : userExists 
        })
    }

    // random string for making password more complex
    const salt = process.env.SALT;
    const saltedPassword = userData.password + salt;

    // use sha1 algorithm for hashing
    const hash =  crypto.createHash("sha1");
    hash.update(saltedPassword);

    // returns hashed password in hex form
    const hashedPassword =  hash.digest("hex");

    const newUser = new userModel({
        email : userData.email,
        password: hashedPassword,
        first_name: userData.first_name,
        last_name: userData.last_name,
        mobile_number: userData.mobile_number,
        gender : userData.gender
    })
    await newUser.save((err) => {
        if(err) console.log(err.message);
    })
}

exports.signIn = async (req, res) => {

};