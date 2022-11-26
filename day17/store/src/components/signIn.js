import { React, useState } from "react";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authUser = async function () {
    console.log("starting to sign in....");

    const userData = {
      email: email,
      password: password
    }
    const url = "http://localhost:8080/auth/login"
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      }
    });
    return result.json();
  }

  const handleSubmit = async e=>{
    e.preventDefault();
    const response = await authUser();
    console.log(response);
    if(response=== undefined) console.log("Got no response from server !");
    if(response.statusCode === 200){
        document.cookie= `access_token=${response.token}`;
    }
  }
  return (
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={
        e=> setEmail(e.target.value)
      }/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={
        e=>setPassword(e.target.value)
      }/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}

export default SignIn;