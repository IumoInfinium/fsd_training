import { React, useState } from "react";

function BasicExample() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gender, setGender] = useState("");

    const registerUser = async ()=>{
        if(!email || !password || !firstName || !lastName ||  Number(mobileNumber) || !gender) console.log("Fill up the entries!!");
        else{
            const userData = {
                email : email,
                password : password,
                first_name : firstName,
                last_name: lastName,
                mobile_number : Number(mobileNumber),
                gender: gender
            };

            const url = "http://localhost:8080/auth/signup"
            let result = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(userData),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            return result.json();
        }
    }
    const handleSubmit = async( e) =>{
        e.preventDefault();
        
        const response = registerUser();
        if(response=== undefined) console.log("Got no response from server !");
        if(response.statusCode === 200){
            document.cookie= `access_token=${response.token}`;
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={
                    e => setEmail(e.target.value)
                } />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={
                    e => setPassword(e.target.value)
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleInputFirstName" value={firstName} onChange={
                    e => setFirstName(e.target.value)
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInputLastName" value={lastName} onChange={
                    e => setLastName(e.target.value)
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputMobileNumber" className="form-label">Mobile Number(10-digit)</label>
                <input type="number" className="form-control" id="exampleInputMobileNumber" value={mobileNumber} onChange={
                    e => setMobileNumber(e.target.value)
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                <select className="form-select" aria-label="Default select example" id="exampleInputGender" value={gender} onChange={
                    e => setGender(e.target.value)
                }>
                    <option defaultValue="">Gender ?</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default BasicExample;