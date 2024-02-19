import Link from 'next/link'
import './globals.css'
import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="px-10">
        <FeaturedSection />
      </div>

    </div>


  )
}

export default Home

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center hero-section">
      <h1 className="text-3xl font-semibold text-white">WELCOME TO LAUNCHLOOM</h1>
      <p className="mt-8 font-light text-white">WHERE DREAMS TAKE FLIGHT AND INNOVATIONS FIND THEIR WINGS, BACKED BY A COMMUNITY OF VISIONARIES TRANSFORMING IDEAS INTO REALITY!</p>
      <div className="flex flex-row mt-10">
        <div class="flex flex-col items-center justify-center max-w-sm py-8 px-20  bg-white  border-r border-gray-200   dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-3xl font-medium tracking-tight text-gray-900 dark:text-white">7,000,000 ETB</h5>
          </a>
          <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Total money raised</p>
        </div>
        <div class="flex flex-col items-center justify-center max-w-sm py-8 px-20 bg-white  border-l border-gray-200   dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-3xl font-medium tracking-tight text-gray-900 dark:text-white">201,546</h5>
          </a>
          <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Projects and Charities funded</p>
        </div>
      </div>
    </section>
  )

}

const FeaturedSection = () => {
  const categories = {
    "All": "#",
    "Design & Arts": "#",
    "Events": "#",
    "Tech & Games": "#",
    "Music & Films": "#",
    "Books & Publications": "#",
    "Charities": "#"
  }

  const projects = [{
    "id": 1,
    "projectName": "Agri-Drone",
    "subTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "desciption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus malesuada ornare. Aenean sit amet interdum diam....",
    "imageURL": "https://img.freepik.com/free-photo/hovering-drone-captures-aerial-view-nature-generated-by-ai_188544-34076.jpg?t=st=1704190552~exp=1704194152~hmac=6e6a3e646a94ab4b62efb9e15b58a2c98686a82c6880d991c9eb504ce898b10e&w=1060",
    "fundAmount": 900000,
    "fundReached": 150000,
    "creator": "Abebe Kebebe"
  },
  {
    "id": 2,
    "projectName": "Agri-Drone",
    "subTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "desciption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus malesuada ornare. Aenean sit amet interdum diam....",
    "imageURL": "https://img.freepik.com/free-photo/hovering-drone-captures-aerial-view-nature-generated-by-ai_188544-34076.jpg?t=st=1704190552~exp=1704194152~hmac=6e6a3e646a94ab4b62efb9e15b58a2c98686a82c6880d991c9eb504ce898b10e&w=1060",
    "fundAmount": 900000,
    "fundReached": 150000,
    "creator": "Abebe Kebebe"
  },
  {
    "id": 3,
    "projectName": "Agri-Drone",
    "subTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "desciption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus malesuada ornare. Aenean sit amet interdum diam....",
    "imageURL": "https://img.freepik.com/free-photo/hovering-drone-captures-aerial-view-nature-generated-by-ai_188544-34076.jpg?t=st=1704190552~exp=1704194152~hmac=6e6a3e646a94ab4b62efb9e15b58a2c98686a82c6880d991c9eb504ce898b10e&w=1060",
    "fundAmount": 900000,
    "fundReached": 150000,
    "creator": "Abebe Kebebe"
  },
  ]
  return (
    <section className="p-8">
      <div className='flex gap-10 font-medium'>
        {Object.entries(categories).map(([label, url]) => (
          <Link href={url}>{label}</Link>
        ))}
      </div>


      <div className='flex flex-row mt-10 justify-around'>
        <div className='flex flex-col items-start pr-40 w-1/2 '>
          <h3 className="text-2xl font-semibold">Featured</h3>
          <div className="mt-5">
            <Image src={projects[0].imageURL} width={500} height={450} />
            <h3 className="font-semibold text-xl mt-3">{projects[0].projectName}</h3>
            <h6 className="font-regular text-xs mt-1 text-gray-500">By {projects[0].creator}</h6>
          </div>
        </div>

        <div className='flex flex-col items-start  border-l pl-16  w-1/2'>
          <h3 className="text-2xl font-semibold">New Projects</h3>

          {projects.map(project => (
            <div>
               <div className="flex mt-5 transition duration-300 ease-in-out hover:scale-110" key={project.id}>
              <Image src={project.imageURL} width={200} height={200} />
              <div className="ml-5 justify-start">
                <h3 className="font-semibold text-sm">{project.projectName}</h3>
                <h6 className="font-regular text-sm mt-1 text-gray-500">By {project.subTitle}</h6>
                <h6 className="font-regular text-xs mt-1 mb-5 text-gray-500">By {project.creator}</h6>
              </div>
              
             </div>
             <hr className="h-px mt-3 bg-gray-200 border-0 dark:bg-gray-700" />
          
            </div>
           
       

            
            
            
          ))}
         
        </div>

      </div>




    </section>
  )
}
