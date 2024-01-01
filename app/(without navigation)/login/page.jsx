import LoginForm from '@/app/components/forms/LoginForm'

import React from 'react'
import Image from 'next/image'
import { GoogleSignInButton } from '@/app/components/buttons/GoogleSignInButton'

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-1 relative h-screen w-1/2 p-20">
                <Image src='/login.jpg' layout='fill' objectFit='cover' />
            </div>
            <div className="flex-1 flex flex-col px-32">
                <h1 className="text-2xl font-bold text-gray-950 mb-6">Log in into your account</h1>
                <LoginForm />
                <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                    </p>
                </div>
                <GoogleSignInButton />
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-10">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
            </div>
        </div>


    )
}

export default LoginPage
