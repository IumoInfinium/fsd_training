const productModel = require("../database/models/products");

exports.getProductDetails = async (req,res) => {
    // res.send("get.user.route!!");
    try{
        const products = await productModel.find({});
        console.log(products);
        res.send({
            statusCode:200,
            message :"Products data retrieved successfully !",
            error : false,
            data:products
        });
    }
    catch(err){
        console.log(err.message);
        res.send({
            statusCode:500,
            message:"Error",
            error: true,
            data:null
        });
    }
}
exports.setProductDetails = async (req,res) => {
    try{
        const productData = req.body;
        
        const newProductObj = new productModel(productData);
        await newProductObj.save();
        res.send({
            statusCode:200,
            message:"update",
            error: false,
            data:newProductObj
        });
    }
    catch(err){
        console.log(err.message);
        res.send({
            statusCode:500,
            message:err.message,
            error: true,
            data:null
        });
    }
}

exports.findProductDetails = async (req,res) => {
    try{
        const productData = req.body;
        const products = await productModel.find({
            name: productData.name
        })
        res.send(products);
    }
    catch(err){
        console.log("Error :" + err.message);
        res.send({
            statusCode:500,
            message:err.message,
            error: true,
            data:null
        });
    }
}