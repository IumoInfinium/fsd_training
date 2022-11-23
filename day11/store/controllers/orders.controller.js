const ordersModel = require("../database/models/orders") 

exports.getOrderDetails = async (req,res) => {
    try{
        const orders = await ordersModel.find({});
        console.log(orders);
        res.send({
            statusCode : 200,
            message : "Orders retrieved successfully !",
            error : false,
            data : orders
        })
    }
    catch(err){
        res.send({
            statusCode : 500,
            message : "Error occured while retriving data !",
            error : true,
            data  : err
        });
    }
}


exports.setOrderDetails = async (req, res) => {
    try{
        const orderData = {user_id, amount, payment_id}= req.body;
        const newOrderObj = new ordersModel(orderData);
        await newOrderObj.save();
        res.send({
            statusCode : 200,
            message : "Orders updated successfully !",
            error : false,
            data :orderData
        })
    }
    catch(err){
        res.send({
            statusCode : 500,
            message : "Error occured while creating  order !",
            error : true,
            data  : err.message
        })
    }
};

exports.findOrderDetails = async (req,res) => {
    try{
        const orderData = req.body;
        const orders = await ordersModel.find(orderData)
        res.send({
            statusCode : 200,
            message : "Matching orders...",
            error : false,
            data :orders
        });
    }
    catch(err){
        console.log("Error :" + err.message);
        res.send({
            statusCode : 500,
            message : "Error occured while retriving data !",
            error : true,
            data  : err.message
        })
    }
}