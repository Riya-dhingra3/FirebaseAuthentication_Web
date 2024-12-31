import { app } from '../firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const auth=getAuth(app);
const SignupPage = () =>{
    const [email,setemail] = useState("");
    const [password,setpassword] =  useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(value=>alert("Success"));
    }
    return (

        <div className='signup-page'>
            <h1>Sign Up Page</h1>
            <label>Password</label>
            <input onChange={e=>setemail(e.target.value)} value={email} type="email" required placeholder='Enter your email'></input>
            <label>Email</label>
            <input onChange={e=>setpassword(e.target.value)} value={password} type="password" required placeholder='Enter your Password'></input>
            <button onClick={createUser}>Sign Up</button>
        </div>
    )
}

export default SignupPage;