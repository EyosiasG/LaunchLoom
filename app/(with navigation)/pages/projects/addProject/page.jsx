import AddProjectForm from '@/app/components/forms/AddProjectForm'
import React from 'react'
import Image from 'next/image'


const AddProject = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-20'>
      <div className="w-full flex flex-col items-center justify-center add-project-hero">
        <h1 className="text-2xl mb-5 mt-10 font-bold ">Publish a project or seek a charity</h1>
      </div>

        <div className="bg-red-50 flex flex-col items-center justify-center px-10 py-5 mx-10 mb-5">
          <h1 className="mb-5 text-xl font-medium">REMEMBER</h1>
          <div className="flex flex-row justify-center items-center text-gray-500 mb-5 mt-10 font-light">
            <div className="px-5 items-center">
              <h1>Kickstarter connects creators with backers to fund projects.</h1>
            </div>
            <div className="px-5">
              <h1>Kickstarter connects creators with backers to fund projects.</h1>
            </div>
            <div className="px-5">
              <h1>Kickstarter connects creators with backers to fund projects.</h1>
            </div>
          </div>
        </div>

     
      <AddProjectForm />
    </div>
  )
}

export default AddProject
