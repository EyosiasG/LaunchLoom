import Link from 'next/link'
import './globals.css'
import React from 'react'

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
  return (
    <section className="p-8">
      <div className='flex gap-10 font-medium'>
        {Object.entries(categories).map(([label, url]) => (
          <Link href={url}>{label}</Link>
        ))}
      </div>


    </section>
  )
}
