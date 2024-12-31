import React, { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth=getAuth(app);
const SignInPage = () =>{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const signinUser = () =>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>console.log("Signin Success"))
        .catch((err)=>console.log(err));
    }
    return (
        <div className="signin-page">
            <h1>Sign In Page</h1>
            <label>Enter your email</label>
            <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Enter your email"></input>
            <label>Enter your password</label>
            <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Enter your password"></input>
            <button onClick={signinUser}>Signin Me In</button>
        </div>
    )
}
export default SignInPage;