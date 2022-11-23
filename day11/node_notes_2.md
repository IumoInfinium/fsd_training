# Node.js Part - 2

This part, assumes that I have completed the [Node.js Part-1](./node_notes_1.md), and got a basic node application with `controlllers` and `routes` all set up.

## Authentication & Authorization

For authorization and authenticaion, I use a pre-built collection of MongoDB `users`, with following Schema

For this, I use a package `crypto` for hashing and storing the password the database. This is in inbuilt package for node, if I don't want that, I can use also `bcrypt`.

So. let's do it...

Firstly, create a new route for authentication in `index.route.js`

<h5 a><strong><code>index.route.js</code></strong> Update</h5>

```javascript
const authRoutes = require("./auth.route")

router.use("/auth",orderRoutes)
```

Since, I imported a `auth.route.js` file, I need to create it as well. so here it is.

<h5 a><strong><code>auth.controller.js</code></strong></h5>

```javascript
const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login',  authController.signIn);

module.exports = router;
```

<h5 a><strong><code>auth.controller.js</code></strong></h5>

```javascript
const userModel = require("../database/models/users");
const crypto = require("node:crypto");

exports.signUp = async (req,res) => {
    try{
        const userData = {email, password, first_name, last_name, mobile_number, gender} = req.body;
    
        const userExists = await userModel.findOne({
            email : userData.email
        })
        console.log(userExists);
        if(userExists){
            return res.send({
                statusCode : 200,
                message : "User already exists! Please login !!",
                error : false,
                data : null
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
    catch (error) {
        res.send({
        statusCode: 400,
        message: error.message,
        error: true,
        data: null,
        });
    }
}
```

> So, what did happen here?

1. When the request is hit, I get user data in request body.

2. I then check if the user exists or not,this can be done by `find` method of **mongoose** with appropriate _pattern_ , if it exits, i response with a message that user already exists.

3. If I don't find user in saved documents, i create a new user, with given details, but there is password here as well.

4. Since there is a password, I need to salt and hash it.
    1. Salting means adding an extra string to original password, making it more complex, this extra string can be a random number of characters.

    2. After salting comes hashing, it is more important for security, because I don't want others to know my password while they are using database, so I hash it, means, encode it in some pattern, with algorithms like `sha1`, `sha256`, etc.

5. After all this, all I need to do is add it to the collection, or our table.


---

## Token Passing during AUTH

install packages `jsonwebtoken` ans `dotenv`.

```
npm i -g jsonwebtoken
npm i -g dotenv
```
First packages is for all tokens while user authenticaiton and authorization.
And second package helps to store sensitive information like user name and password, database access ,etc.

To use, `dotenv` , we create a file `.env` in base project directory and add all the sensitive information i.e. environmental variables.

Add PORT, MongoDB access URI, salt in it.

Example

```
PORT=8080
SALT='asdadi83hsc49'
MONGODB_URI='your-mongodb-connection-uri-here'
```

Since, I am adding to **env** file, I can change a few things like replacing all hardcoded ports, salts, mongodb connection url to respective environment variable, like this...

<h5 a><strong><code>index.js</code></strong> Update</h5>

```javascript
const dotenv = require("dotenv");
dotenv.config();

// use it like this
const PORT = process.env.PORT;
```

Similarly, use the **SALT** in `controllers/auth.controller.js` and **MONGODB_URI** in `database/connection.js`.

---

### Using JWT - Json Web Token

Links
- [JWT Auth from DigitalOceean](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs) $\star$
- [JWT Auth from StackAbuse](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/)

So let me try doing it...
- Generate a **token_secret** using `crypto` using

    ```js
    require('crypto').randomBytes(64).toString('hex')
    ```

    Add the random generated string or our token to `.env` file to gatekeep it.


- Now, I need to again to the `signUp` controller, add a new code block after saving the user..

    <h5 a><strong><code>auth.controller.js</code></strong> Update</h5>

    ```javascript
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_TOKEN, {"expiresIn" : "2h"});

    res.send({
        statusCode: 200,
        message: "User created successfully",
        error: false,
        data: newUser,
        token: token,
    });
    ```

    But, I need the browser to remember my token for the user,
    I can do it in various ways
    - Adding token in cookies.
    - Adding it to header of a request
    - etc...

    For now, I will add the token to my site's cookies and let the browser remember it and when I need it, I will take it from cookies.

    To do so, I need a package `cookie-parser` to help me parse the cookies, ofcourse to take the token from there.
    To do, this install it with

    ```
    npm i -g cookie-parser
    ```

    And now, in 

    <h5 a><strong><code>auth.controller.js</code></strong> Update</h5>

    ```javascript
    ```
    So, now, my Token setup is ready when a user registers, Yayyy!!