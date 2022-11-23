const jwt = require("jsonwebtoken");

exports.authMiddleWare = async (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    if(!token){
        return res.sendStatus(403);
    }

    try{
        const userInfo =  jwt.verify(token,process.env.SECRET_TOKEN);
        req.userID = userInfo.id;
        req.userRole=userInfo.role;
        return next();
    }
    catch(error){
        return res.sendStatus(403);
    }
}