"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"

function Login(){
    const labelsTailwind = 'mb-1 p-1 w-[100%] block text-sm/6 font-medium text-amber-400 ';
    const inputTailwind = 'block w-full rounded-md mb-1 grow p-1 text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
    const router = useRouter()

    const { 
        register, 
        handleSubmit,
    } = useForm()

    const sendForm=(data)=>{
        return console.log(data)
    }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit(sendForm)}  method="post">
                <label htmlFor="username" className={labelsTailwind}>
                    Name: <input 
                            {...register("username")}
                            id="username" 
                            name="username" 
                            placeholder="Joe Black"
                            type='text'
                            className={inputTailwind}
                            />
                </label>
                <label htmlFor="email" className={labelsTailwind}>
                    Email: <input 
                            {...register("email")}
                            id="email" 
                            name="email" 
                            placeholder="joe.black@mail.com"
                            type='mail'
                            className={inputTailwind}
                            />
                </label>
                <label htmlFor="password" className={labelsTailwind}>
                    Password: <input 
                                {...register("password")}
                                id="password" 
                                name="password" 
                                placeholder="*********"
                                type='password'
                                className={inputTailwind}
                                autoComplete="off"
                                />
                </label>
                <button 
                    className='w-[100%] cursor-pointer relative   p-1 text-white rounded-lg bg-amber-400 hover:opacity-40 hover:bg-amber-700'
                    type='submit'
                >
                    Next
                </button>
                <button 
                    className={`${labelsTailwind} underline cursor-pointer mb-2`}
                    onClick={() => router.push('/login/create')}
                >
                Already have a account?  
                </button>
            </form>
        </React.Fragment>
    )
}

export default Login