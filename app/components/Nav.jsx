import React from 'react'

const Nav = () => {
    return (
        <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
            <div class="max-w-screen-xl flex flex-wrap items-center p-4 text-sm">
                <div class="mr-auto px-10">
                    <h1 class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LAUNCHLOOM</h1>
                </div>
                <div class="mr-auto px-2">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Start A New Project</a>
                        </li>
                    
                    </ul>
                </div>
                <div class="ml-auto ">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Sign In</a>
                        </li>
                        <li>
                            <a href="#" class="bg-blue-500 text-white px-4 py-3 rounded-2xl"> Sign Up</a>
                        </li>
                    
                    </ul>
                </div>
            </div>

        </nav>


    )
}

export default Nav
