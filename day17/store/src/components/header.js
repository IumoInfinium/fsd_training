import React,{useEffect, useState} from "react";
import {Link } from "react-router-dom";


export const Header = (props) => {

    const [name, setName] = useState("");

    useEffect(()=>{
        setName(()=>"new header");
    },[name]);
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                {props.title + name}
            </a>
            
            <Link className="navbar-brand" to="/"></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link active" to="/">Home</Link>
                <Link className="nav-link active" to="/users">Users</Link>
                <Link className="nav-link active" to="/products">Products</Link>
                <Link className="nav-link active" to="/orders">Orders</Link>
                <Link className="nav-link active" to="/signin">Sign In</Link>
                <Link className="nav-link active" to="/signup">Sign Up</Link>
            
            </div>
            </div>
        </div>
        </nav>
    )
};


export const Example = (props ) =>{
    return (
        <div>
            <p>asdads</p>
        </div>
    );
}
// export default Header;