# Getting started with React JS

> Firstly, what is react JS?

React JS is a framework (a thing which is dependent on other things). 

States and Props

---

### Creating a basic React application


Create a directory, where you want your react application to be.. let's say it  REACT_PROJECT


### Hooks

use Effect mount
list context


1. ### Using useState Hooks

    - Importing it in my componenet `Header.js`.

    - Use it like this, inside a function
        ```jsx
        const {name,setName} = useState("header");
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