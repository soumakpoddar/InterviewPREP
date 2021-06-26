import React, { useState } from 'react';
import './register.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register" , {
                username,
                email,
                password
            });

            res.data && window.location.replace("/login");
        }catch(err)
        {
            setError(true);
        }
    };

    return (
        <div className="register">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>UserName</label>
                <input onChange={e=>setUsername(e.target.value)} className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input onChange={e=>setEmail(e.target.value)} className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={e=>setPassword(e.target.value)} className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && toast.error('Username Present ⚠⚠', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            }
        </div>
    )
}
