"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Login(){
    const labelsTailwind = 'm-2 p-1 w-[80%] block text-sm/6 font-medium text-amber-400 ';
    const inputTailwind = 'block w-full rounded-md  grow py-1.5 pr-3 pl-1 text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
    const router = useRouter()

    return(
        <React.Fragment>
            <label htmlFor="username" className={labelsTailwind}>
                Name: <input 
                        id="username" 
                        name="username" 
                        placeholder="Joe Black"
                        type='text'
                        className={inputTailwind}
                        />
            </label>
            <label htmlFor="email" className={labelsTailwind}>
                Email: <input 
                        id="email" 
                        name="email" 
                        placeholder="joe.black@mail.com"
                        type='mail'
                        className={inputTailwind}
                        />
            </label>
            <label htmlFor="password" className={labelsTailwind}>
                Password: <input 
                            id="username" 
                            name="username" 
                            placeholder="*********"
                            type='password'
                            className={inputTailwind}
                            />
            </label>
            <button className='w-[80%] cursor-pointer relative  min-w-0 py-1.5 pr-3 pl-1 text-white rounded-lg bg-amber-400 hover:opacity-40 hover:bg-amber-700'>
                Next
            </button>
            <button className={`${labelsTailwind} underline cursor-pointer mb-2`} onClick={() => router.push('/login/create')} >
              Already have a account?  
            </button>
        </React.Fragment>
    )
}

export default Login