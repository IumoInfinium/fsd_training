// import logo from './logo.svg';
// import img from 'C:/Users/iumoi/Downloads/elon.webp'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header,Example} from './components/Header'

import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import {useEffect} from "react";
function App(){
  // const add = ()=>{
  //   console.log("add function !");
  // }

  return (
    <div className='App'>
      {/* <Header title="TITLE" name={add}></Header> */}
    
      <Router>
      <Header title="TITLE"></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/about" element={<About />}/> */}
          <Route path="/users" element={<Users />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
          <Route path="/orders" element={<Orders />}> </Route>

          <Route path="/signin" element={<SignIn />}> </Route>
          <Route path="/signup" element={<SignUp />}> </Route>
        </Routes>
      </Router>

      {/* <SignUp></SignUp> */}
      <Example></Example>
    </div>
  )
}
export default App;
