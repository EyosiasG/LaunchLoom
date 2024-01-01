"use client"

import React from 'react'
import { signIn } from 'next-auth/react';
import { useRouter  } from 'next/navigation';
import { useState } from 'react';


const SignUpForm = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
    
        try {
            const res = await fetch(" http://localhost:3000/api/Users", {
                method: "post", // lowercase "post"
                body: JSON.stringify({formData}), // remove the outer object wrapper
                headers: {
                    "Content-Type": "application/json", // use "Content-Type"
                },
            });
    
            if (!res.ok) {
                const response = await res.json();
                console.log("Error Message: ", response.message);
                setErrorMessage(response.errorMessage);
            } else {
                 await signIn("login", {
                    email: formData.email,
                    password: formData.password,
                    redirect: true,
                    callbackUrl: "/",    
                });
    
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    

    return (
        <>
         <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-1/2">
                <h1>Sign up</h1>
                <label>Email</label>
                <input 
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    placeholder="Email Address"
                    className="m-2 bg-slate-400 rounded" />
                
                <label>Password</label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required={true}
                    value={formData.password}
                    placeholder="Password"
                    className="m-2 bg-slate-400 rounded" />
                <input 
                    type="submit"
                    value="Create User"
                    className="bg-blue-300 hover:bg-blue-100" />
            </form>
            

        </>
     
           
     
    )
}

export default SignUpForm
