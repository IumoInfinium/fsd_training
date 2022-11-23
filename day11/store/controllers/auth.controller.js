const userModel = require("../database/models/users");
const crypto = require("node:crypto");
const jwt = require("jsonwebtoken");
const cookieParser  = require("cookie-parser");

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
        const token = jwt.sign(
            {userId: newUser._id},
            process.env.SECRET_TOKEN,
            {expiresIn: "2h",}
            );
        
        res.json({
            statusCode: 200,
            message: "User created successfully",
            error: false,
            data: newUser,
            token: token,
        });
    }
    catch (err) {
        // res.send({
        //     statusCode: 500,
        //     message: err.message,
        //     error: true,
        //     data: null,
        // });
        // res.send("asd");
    }
}

exports.signIn = async (req, res) => {
    try{
        const userData = {email, password} = req.body;

        const userExists = userModel.findOne({
            email : userData.email
        });
        console.log(userExists);

        if(!userExists){
            return res.send({
                statusCode : 200,
                message : "User doesn't exists! Please signup first !!",
                error : false,
                data : "User doesn't exists."
            })
        }
        const salt = process.env.SALT;
        const saltedPassword = userData.password + salt;

        // use sha1 algorithm for hashing
        const hash =  crypto.createHash("sha1");
        hash.update(saltedPassword);

        // returns hashed password in hex form
        const hashedPassword =  hash.digest("hex");
        if(hashedPassword  !== userExists.password){
            res.send({
                statusCode : 200,
                message : "Incorrect Password while login !!",
                error : true,
                data : "Wrong Password! Please try again !!"
            })
        }

        res.send({
            statusCode : 200,
            message : "Logged In",
            error : true,
            data : userExists 
        })
    }
    catch(err){
        
    }
};