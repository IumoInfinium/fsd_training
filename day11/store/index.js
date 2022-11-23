// Inporting the connnection.js to connect to the server 

const mongo = require("./database/connection");
const routes = require("./routes/index.route");
const express = require('express');
const dotenv = require("dotenv");
const cookieParser  = require("cookie-parser");


const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use("/", routes);

const main = async() => {
    const connect = await mongo.connectToDb();
    app.listen(PORT,()=>{
      console.log(`Listening to PORT ${PORT}`);
    });
}
main();

// const userObj = new User({
//   email : "yash2@gmail.com",
//   password:"superSecretPassword",
//   first_name:"Yash",
//   last_name:"Mali",
//   mobile_number:9876543212,
//   gender:'Male'
// });

// const productObj = new Product({
//   name:"Introduction to Algorithms",
//   desc:"A book about all different useful algorithms in your career",
//   sku:"uio12c",
//   category_id:2,
//   price:123,
//   status:"active",
//   collection:[{
//     img:"ASd",
//     desc:"asd"
//   }]
// })
// const orderObj = new Order({
//   order_id: "asdcr12344",
//   amount:123,
//   payment_id:12352523
// })

// // saving new user to collection
// userObj.save(function(err){
//   if(err){
//     console.log("Some errror occured during creating new user.. ");
//     // throw err;
//   }
//   console.log("User added successfully!");
// })

// // saving new product to collection
// productObj.save(function(err){
//   if(err){
//     console.log("Some errror occured during creating a new product.. ");
//     // throw err;
//   }
//   console.log("Product added successfully!");
// })

// // saving new order to collection
// orderObj.save(function(err){
//   if(err){
//     console.log("Some errror occured during placing order.. ");
//     // throw err;
//   }
//   console.log("Order placed successfully!");
// })


