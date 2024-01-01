'use client'
import React from 'react'

const AddProjectForm = () => {

    const handleSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit} method="post" className='p-10'>
            <div className='flex flex-row justify-between mb-10'>
                <div className='flex flex-col w-1/2'>
                    <label className='mb-2 font-medium'>Title</label>
                    <input className=" mb-5 w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Title' />

                    <label className='mb-2 font-medium'>Sub-Title</label>
                    <input className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Sub-Title' />
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
                    <select id="category" className="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Sub-Title'>
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
                    <textarea id="message" rows="6" class="w-auto bg-gray-50 border bg-transparent border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit dark:focus:border-blue-500" placeholder='Project Description'></textarea>

                </div>
                <div className='w-1/2 px-10'>
                    <h3 className="font-medium mb-2 text-lg">Project Description</h3>
                    <p className="font-light text-gray-500">Choose a category to help backers find your project.
                    Your category will help us provide more relevant guidance for your project.</p>
                </div>
            </div>
            <hr />



        </form>
    )
}

export default AddProjectForm
