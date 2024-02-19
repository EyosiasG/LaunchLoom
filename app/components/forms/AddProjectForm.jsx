'use client'
import AddProject from '@/app/(with navigation)/pages/projects/addProject/page';
import React, { useRef } from 'react'
import { useState } from 'react';
import Link from 'next/link';




const AddProjectForm = () => {


    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);

    const handleInputFiles = (e) => {
        const image = e.target.files[0]; // Only take the first file if multiple files are selected

        setFile(image);
    };

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
    
        // if (!file) {
        //     return alert("No image selected");
        // }
    
        const formDataObj = new FormData();
    
        // Append text data to FormData
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });
    
        // Append file to FormData
       // formDataObj.append('file', file);
    
        console.log("Clicked Submit Button");
        for (let pair of formDataObj.entries()) {
            console.log("Form Data", `${pair[0]}: ${pair[1]}`);
        }

        try{
            const res = fetch("http://localhost:3000/api/Projects",{
                method: "POST",
                body: JSON.stringify({formData}),
                headers:{
                    "Content-Type": "application/json"
                }

            })

            if(!res){
                console.log("Error creating project");
            }
            
        }catch(error){
            console.log("Error: ", error);
        }
    
       
    };
    return (
        <form onSubmit={handleSubmit} method="post" className='p-10'>

            <div className='flex flex-row justify-between mb-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Title</label>
                    <input
                        id="projectName"
                        name="projectName"
                        onChange={handleChange}
                        type="text"
                        value={formData.projectName}
                        className=" mb-5 w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Title' />

                    <label className='mb-2 font-medium'>Sub-Title</label>
                    <input
                        id="projectSubtitle"
                        name="projectSubtitle"
                        onChange={handleChange}
                        value={formData.projectSubtitle}
                        className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Sub-Title' />
                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Project Title</h3>
                    <p className="font-light text-gray-500">Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.</p>
                </div>
            </div>
            <hr />

           <div className='flex flex-row justify-between my-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Project Category</label>
                    <select
                        id="projectCategory"
                        name="projectCategory"
                        onChange={handleChange}
                        value={formData.projectCategory}
                        className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Sub-Title'>
                        <option selected>Choose a category</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>

                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Project Title</h3>
                    <p className="font-light text-gray-500">Choose a category to help backers find your project.
                        Your category will help us provide more relevant guidance for your project.</p>
                </div>
            </div>
            <hr /> 

            <div className='flex flex-row justify-between my-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Project Description</label>
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        onChange={handleChange}
                        value={formData.projectescription}
                        rows="6"
                        className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Description'></textarea>

                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Project Description</h3>
                    <p className="font-light text-gray-500">Choose a category to help backers find your project.
                        Your category will help us provide more relevant guidance for your project.</p>
                </div>
            </div>
            <hr />


            {/* <div className='flex flex-row justify-between my-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Project Location</label>
                    <input
                        id="location"
                        name="location"
                        onChange={handleChange}
                        value={formData.location}
                        className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Location' />

                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Project Description</h3>
                    <p className="font-light text-gray-500">Choose a category to help backers find your project.
                        Your category will help us provide more relevant guidance for your project.</p>
                </div>
            </div> */}
            {/* <hr />

            <div className='flex flex-row justify-between my-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Project Image</label>
                    <input key="" type="file" accept='image/*' onChange={handleInputFiles} />
                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Project Image</h3>
                    <p className="font-light text-gray-500">Add an image that clearly represents your project.
                        Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps,
                        and (when shared) on social channels.</p>
                </div>
            </div>
            <hr /> */}


            <div className='flex flex-row justify-between my-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Funding Goal</label>
                    <input
                        id="fundAmount"
                        name="fundAmount"
                        type="text"
                        onChange={handleChange}
                        value={formData.fundingAmount}
                        className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Location' />

                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Funding Goal</h3>
                    <p className="font-light text-gray-500">Set an achievable goal that covers what you need to complete your project.</p>
                </div>
            </div>
            <hr />

            {/* <div className='flex flex-row justify-between my-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Campaign Date</label>
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input
                            name="campaignDate"
                            id="campaignDate"
                            type="text"
                            onChange={handleChange}
                            value={formData.campaignDate}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                    </div>
                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Date</h3>
                    <p className="font-light text-gray-500">Set an achievable goal that covers what you need to complete your project.</p>
                </div>
            </div> */}
            <hr />

            <input
                type="submit"
                value="Publish"
                className="my-2 items-center text-white bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
        </form>
    )
}

export default AddProjectForm
