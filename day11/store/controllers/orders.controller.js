const ordersModel = require("../database/models/orders") 

exports.orderGetDetails = async (req,res) => {
    try{
        const orders = ordersModel.find({});
        console.log(orders);
        if(!orders) throw "No data found !";
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


exports.orderSetDetails = async (req, res) => {
    try{
        const newOrderInfo = req.body;
        console.log(newOrderInfo);
        if(newOrderInfo){
            const orderObj = new ordersModel({
                user_id : newOrderInfo[user_id].trim(),
                amount : newOrderInfo[amount].amount,
                payment_id : newOrderInfo[payment_id],
            })
        } 
        res.send({
            statusCode : 200,
            message : "Orders updated successfully !",
            error : false,
            data :" GOOD !"
        })
    }
    catch(err){
        res.send({
            statusCode : 500,
            message : "Error occured while retriving data !",
            error : true,
            data  : err
        })
    }
};