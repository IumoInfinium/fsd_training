# Getting started with Node 

---

Node is single threaded.
Node Engine (V8 )is made with the support of C++ to interact with the system kernel to work with system resources.

> **Event** ? What is a event ? **Event** is just a task to be performed. 

And its events are classified in 2 types.

__Blocking events__ - Time or process used by third-party functions
Eg. - Promises, Aync & Await

__Unblocking events__- Events which take immediate action.
Eg. - `Console.log("Hii");`

That means, the events are inputted inside a queue for work and then performed when needed.
That is why it is able to work even if it is single threaded.

### How the request & response works in node ?

`Request` goes to `app` which then hands it to `controller`, which does the task and hands it output to app, which then sends back a `response` to where it was hit from.

- __Request__ - Something which needs to be done somewhere.. mainly a task

- __App__  - A system that consists the references of all the different tasks that can performed. More formally, it contains `routes`, that are different addresses ot tasks that be performed. Example ...
    - /home
    - /products
    - etc.

- __Controller__ - Functions that separate out the code to route requests from the code that actually processes requests. Example...
    - Database
    - Advertisements
    - etc.

    Controllers can made in such a way that they can be grouped to reduce the code size.

---

## $\star$  Creating a node's `package.json`

```
npm init
```
Now, select whatever options you want...

---

## $\star$  Adding a new package to dependencies with npm

Install a `express` package, and it get also updates the project's dependencies with the new package.

```
npm i express
```

It also creates `package-log.json`, which stores all the indirect dependencies needde.

```
npm i mongoose
```
Installing mongoose for mongodb interface.


Similarly, for installing or using packages for only development, I can use
Here, nodemon is hot reload tool for node application.
```
npm i --save-dev nodemon
```


---

## Creating the main file `index.js`

It is where all the work is done.

Secondary to it, create a directory system
*database/models*.

Similarly in database directory, create a connection file ` connection.js`, connecting mongodb database.
such as 

<h5 a><strong><code>connection.js</code></strong></h5>

```javascript
const mongoose  = require("mongoose");

exports.connectToDb = async () =>{
    mongoose.connect(`mongodb+srv://<username>:<password>@firstcluster.fqd4lpb.mongodb.net/store`)
    .then(()=>{
        console.log("Connected !!");
    })
    .catch((error)=>{
        console.log("Error occured..." + error.message)
    })
}
```
---

## Creating models for the database

__Models__ - Wrapper for the schema for a collection/record.

For being systematic, we created a directory structure like this
```
.
├── index.js
├── package.json
├── package-lock.json
├── node_modules (all modules)
└── database
    ├── models
    │   └── User.js
    └── connection.js

```

Clearly, I can see a `User.js` file in models, that is my 


---


### Modules

- FileSystem
    - Read/Write any file in the filesystem.
- There are *n* numbers of modules available.




---

### Using express in Node

- Import Express in js file.

    ```js
    const express = require("express");
    ```

- Make an object with `express` function.

    ```js
    const app = express();
    ```

- Create routes wherever you need

    Here, we made a base route with a get request at `/` and responded it with _hello world_
    ```js
    app.get('/', (req, res) => {
        res.send('hello world');
    })
    ```

- But, it won't show anywhere, so I am gonna make a local server that listens and responds to the request I make. I do this by

    ```js
    const PORT = 8080;
    app.listen(PORT,()=>{
        // Anything you want the server to do 
    });
    ```

- Now, to run the file just execute

    - `node index.js`
    - `npm start`  (This might not work for now, but will work after going through next section)
    
---

### Adding custom scripts to the node application

Now, for I will be adding a package `nodemon` to my custom scripts for reloading the project.

Find `package.json` and for the key `scripts`, add a new key-value pair in form of below.

<h5 a><strong><code>package.json</code></strong></h5>

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "nodemon ./index.js localhost 8080"
  }
```

Here, `start` is the command with `npm`, which triggers our custom script in the value of __start__.

---

### Creating schema i.e. Models for database

I created, a __database__ directory structure containing __models__ directory as well as a `connection.js` file for database connection.

For inside the models, I create some *js* files, can be `users.js`, `products.js`, these are just structure of our collection/ table in database.
Let's say, I want a table named __users__, i create `users.js`. And it is just like this.


<h5 a><strong><code>users.js</code></strong></h5>

```javascript
mongoose = require('mongoose');
const {Schema, model} = mongoose;

// Defining a Schema for users
const user = new Schema({
    email:{
        type : String,
        trim:true,
        required : [true,"You need to have an email id!"],
    },
    password:{
        type:String,
        trim:true,
        required: [true,"You need a password to login in the account, duh?"]
    },
    first_name:{
        type:String,
        trim:true,
        required:[true, "You got a name or not?"]
    },
    last_name:{
        type:String,
        trim:true,
        required: [true, "You got a name or not?"]
    },
    mobile_number:{
        type:Number,
        min: 1111111111,
        max:9999999999
    },
    gender:{
        type:String,
        trim:true,
        enum:['Male','Female','Other']
    },
    created_at:{
        type:Date,
        default: Date.now
    },
    modified_at:{
        type:Date,
        default: Date.now
    }
});

// model("<collection-name-in-db>",<collection-schema-object>)
const userModel = new model("users",user);

// exporting User Model
module.exports = userModel;
```

Similary, create Schema's for products and  orders, and all other different schema's, i need.


In case, if I want some custom or nested typed Schema. I am assuming that there are imports and exports like the last code.
```javascript
const addressSchema = new Schema({
    street : String,
    city: String,
    pincode : Number
});

const test = new Schema({
    name : {type: String, required:true},
    mobile_number : {type: Number},
    dob : {type: Date},
    address : addressSchema
});
```

---

```
 Request -> index.js -> routes -> controllers
              |           |           |
              v           v           v
           connection   index.route   models
                     /    |     \        |
                    /     |       \       All your models/Schemas
        user.route        |    orders.route 
                        products.route
```     

---
### Routing

> What is a route ?

Routes are endpoints, from where our application, gets through different pages, that is, an address to contain all the different pages in a website.

Now, that we created the schema's, we need to create routes as well as controllers.
So, I create two new folders `routes` and `controllers` in my project directory.

Firstly for routes, in routes folder, I create, my base URL route file `index.route.js` with 

<h5 a><strong><code>index.route.js</code></strong></h5>

```javascript
const express = require('express');
const router = express.Router();
const userRoutes = require("./users.route")

// respond with "hello world" when a GET request is made to the homepage
router.use("/user",userRoutes);

router.get('/', (req, res) => {
    res.send('Holla, you are currently at users page-section !');
})

module.exports = router;
```

Here, what I did was created a base URL `/` with router and sent a response on a *GET* request on hit.
Also, I added a `/user` route to  router object and linked it with a another file, which contained, route to `/user/` endpoint route.

The `users.route.js` will look alike to `index.route.js` like this...

<h5 a><strong><code>users.route.js</code></strong></h5>

```javascript
const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
        // console.log("users.routes!");
    res.send("user.routes !!");
});

module.exports = router;
```

This, makes me, limited to one route having one endpoint,so I will try making it more flexible with a controller directory structure, by adding to `users.route.js`

imports..
```javascript
const userController = require("../controllers/users.controller");
```

and now adding some code in it...

```javascript
router.get("/", userController.getUserDetails);
router.get("/set", userController.setUserDetails);
```

This creates, 2 new endpoints for `/user` route, namely `/user/` and `/user/set`.

But, I don't have, `user.controller.js`, from where am I gonna import it! So I need this file in `controllers` folder, with following content.

<h5 a><strong><code>users.controllers.js</code></strong></h5>

```javascript
exports.getUserDetails = async (req,res) => {
    res.send("get.user.route!!");
}
exports.setUserDetails = async (req,res) => {
    res.send("set.user.route!!");
}
```

Starting my node application by `npm start` inside the terminal.

Now,when I open my browser, and go to [http://localhost:8080](http://localhost:8080), it will show 

> Holla, you are currently at users page-section !

See, the URL open right now is `localhost:8080/`, but what if i change it to `localhost:8080/user` or `localhost:8080/user/set`, i will see this

#### [http://localhost:8080/user/](http://localhost:8080/user/)
> get.user.route!!

#### [http://localhost:8080/user/set](http://localhost:8080/user/set)
> set.user.route!!

What it shows right now is static !! And what's the fun in it?
So, let's change `users.controllers.js`, to access the collection(table) and get a list of all the users.

<h5 a><strong><code>users.controllers.js</code></strong></h5>

```javascript
const userModel = require("../database/models/users");

exports.getUserDetails = async (req,res) => {
    // res.send("get.user.route!!");
    try{
        const users = await userModel.find({});
        console.log(users);
        res.send(users);
    }
    catch(error){
        console.log(error.message);
        res.send("error");
    }
}
```

This will give an array of all the users, when `localhost:8080/users/` is hit.
Similarly, I can create different routings with endpoints with different funcitonalities(controllers) for them. 

> **Note** : I am assuming that the terminal commans `npm start`, still works as expected, and runs continuously.


---
 
### Using POST request

For creating a new object for collection, I receive data from the request's body.

Firstly, I need to add a endpoint to handle `POST` request in `users.route.js`.

<h5 a><strong><code>users.route.js</code></strong></h5>

```javascript
router.post("/",userController.setUserDetails);
```

<h5 a><strong><code>users.controller.js</code></strong></h5>

```javascript
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
```

All of this creates, a basic API based node application, but stil I got more to do, so for more go to [Node.js Part 2](./node_notes_2.md)