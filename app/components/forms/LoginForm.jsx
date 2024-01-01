"use client"

import React from 'react'
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';


const LoginForm = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

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
    
        try{
            await signIn("login", {
                email: formData.email,
                password: formData.password,
                redirect: true,
                callbackUrl: "/",    
            });
        }catch(error){
            console.log("Error loggin in user", error);
        }
         

    };
    

    return (
        <>
         <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3">
        
    
                <input 
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    placeholder="Email Address"
                    className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" />
                
            
                <input 
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required={true}
                    value={formData.password}
                    placeholder="Password"
                    className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500" />
                <Link href="" className="text-blue-400 text-sm font-light">Forgot your password?</Link>
                <input 
                    type="submit"
                    value="Sign In"
                    className="my-2 text-white bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </form>
            <p className="text-red-500">{errorMessage}</p>

        </>
     
           
     
    )
}

export default LoginForm
