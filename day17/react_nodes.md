# Getting started with React JS

> Firstly, what is react JS?

React JS is a framework (a thing which is dependent on other things). 

States and Props

---

### Creating a basic React application


Create a directory, where you want your react application to be.. 

Inside that directory, create react application with executing this command
```
npx create-react-app store
```
This command creates an boilerplate react application with the name `store`.
I see a **store** directory and inside that, firstly I create a new folder inside it called `components`. Now my project structure is like..

```
.
├── .gitignore
├── package.json
├── package-lock.json
├── node_modules (all modules)
├── components
├── public
│   └── index.html
└── src
    ├── index.js
    ├── index.css
    ├── App.js
    └── App.css
```

> NOTES : I have mentioned only the important files, that I am gonna use for our project, there are many others as well.

### Project data flow

```
 index.js --> App.js --> components
                        /    |      \ 
                  Header.js about.js  user.js, etc....
```

I will be mainly play with `App.js` and `components` directory and all its file.
### Hooks

use Effect mount
list context


1. ### Using useState Hooks

    - Importing it in my componenet `Header.js`.

    - Use it like this, inside a function
        ```jsx
        const [name,setName] = useState("header");
        {name}
        ```
        This way,I can use the useState.



2. ### Routing

    - Install router package with
        ```
        npm i react-router-dom
        ```
    - I will use it in `App.js`, my main file from where I link from files as well, So we import it there and use like

    ```jsx
    import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

    ```
    <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
    ```


    ```



npm i cors