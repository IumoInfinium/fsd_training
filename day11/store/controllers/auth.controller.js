const userModel = require("../database/models/users");
const crypto = require("node:crypto");
const jwt = require("jsonwebtoken");
const cookieParser  = require("cookie-parser");
const e = require("express");

const passwordHasher= function(password){
    const salt = process.env.SALT;
    const saltedPassword = password + salt;

    // use sha1 algorithm for hashing
    const hash =  crypto.createHash("sha1");
    hash.update(saltedPassword);

    // returns hashed password in hex form
    return hashedPassword =  hash.digest("hex");
}

exports.signUp = async (req,res) => {
    try{
        const userData = req.body;
    
        const userExists = await userModel.findOne({
            email : userData.email
        })
        // console.log(userExists);
        if(userExists){
            res.json({
                statusCode : 200,
                message : "User already exists! Please login !!",
                error : false,
                data : userExists
            })
        }
        else{
            const hashedPassword = passwordHasher(userData.password);

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
            const token = jwt.sign(
                {userId: newUser._id},
                process.env.SECRET_TOKEN,
                {expiresIn: "2h",}
                );
            
            res.cookie('access_token',token);

            res.send({
                statusCode: 200,
                message: "User created successfully",
                error: false,
                data: newUser,
                token: token,
            });
        }
    }
    catch (err) {
        res.send({
            statusCode: 500,
            message: err.message,
            error: true,
            data: null,
        });
    }
}

exports.signIn = async (req, res) => {
    try{
        const userData = {email, password} = req.body;

        if(!userData.email  || !userData.password){
            throw "Need an email and password to login!";
        }
        const hashedPassword = passwordHasher(userData.password)
        console.log(hashedPassword);
        const userExists = userModel.findOne({email:userData.email})
            .then((user)=>{
                if(!user){
                    res.send({
                        statusCode : 200,
                        message : "No user exists !!",
                        error : false,
                        data : userData
                    })
                }else{
                    if(!hashedPassword && hashedPassword !== userExists.password){
                        res.send({
                            statusCode : 200,
                            message : "Wrong password !!",
                            error : false,
                            data : userData
                        })
                    }
                    else{
                        const token = jwt.sign({id: userExists._id},process.env.SECRET_TOKEN,{"expiresIn":'1h'});

                        res.cookie("access_token",token);
                        res.send({
                            statusCode : 200,
                            message : "Logged In",
                            error : true,
                            data : null 
                        })
                    }
                }
            })
    }
    catch(err){
        res.send({
            statusCode : 500,
            message : "Error while logging in !",
            error : true,
            data : err
        })
    }
};

exports.logout = async (req, res) =>{
    res.clearCookie("access_token").status(200).json({
        message : "Logged out succcesfully !"
    });
    // res.redirect('/');
};