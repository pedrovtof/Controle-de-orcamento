"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { useSnack} from '@/app/_templates/snackbarContext'
import Loading from '../../../../public/icons/loading_gif.gif' 
import Image from 'next/image'
import envForDev from '@/app/env'
import axios from 'axios'
import { publicEncrypt, privateDecrypt} from 'crypto'

function Login(){
    const labelsTailwind = 'mb-3 p-1 w-[100%] block sm:text-sm/6 font-medium text-amber-400 ';
    const inputTailwind = 'isabled:opacity-75 block w-full rounded-md mb-1 grow px-4 py-1 text-base text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
    const router = useRouter()
    const {setSnack} = useSnack()

    const { 
        register, 
        handleSubmit,
    } = useForm()

    const [buttonState, setButtonState] = useState(true);
    const [isactiveInput, setIsactiveInput] = useState(false);

    const handlerButton=()=>{
        setButtonState(false)
        setTimeout(() => {
        setButtonState(true)
        handlerIsactiveInput(false)
        }, 2000)   
    }

    const handlerIsactiveInput=(x)=>{
        setIsactiveInput(x)
    }


    const handlerLoginAuthService=async(data)=>{

        class LoginForm{
            constructor(username, email, password){
                this.username   = username
                this.email      = email
                this.password   = password
            }
        }

        const CryptLoginForm = new LoginForm(
            publicEncrypt(envForDev['crypto'].publicKey,Buffer.from(data.username)).toString('hex'),
            publicEncrypt(envForDev['crypto'].publicKey,Buffer.from(data.email)).toString('hex'),
            publicEncrypt(envForDev['crypto'].publicKey,Buffer.from(data.password)).toString('hex')
        )

        //console.log(`usuario:  ${CryptLoginForm.username}, \n email: ${CryptLoginForm.email},  \n senha: ${CryptLoginForm.password}`)

        const url = `${envForDev['api-auth-service'].CreateUser}`
        await axios.post(url, {
            "username": CryptLoginForm.username,
            "email": CryptLoginForm.email,
            "password": CryptLoginForm.password
        })
        .then(resp=>{
            handlerButton()
            let apiMessage = JSON.stringify(resp.data.message).replace(/^"|"$/g, '')
            setSnack({ visible: true, message: `${apiMessage}`, color:JSON.stringify(resp.data.stackStatus).replace(/^"|"$/g, '')})
        })
        .catch(resp=>{
            handlerButton()
            setSnack({ visible: true, message: 'Houve um erro, tente novamente mais tarde', color:'error'})
        })
            
    }

    const sendForm=(data)=>{
        handlerIsactiveInput(true)
        handlerLoginAuthService(data)
    }


    return(
        <React.Fragment>
            <div>
                <h1 className='text-3xl text-amber-400'>
                    Create User
                </h1>
            </div>
            <form onSubmit={handleSubmit(sendForm)}  method="post">
                <label htmlFor="username" className={labelsTailwind}>
                    *Name: <input 
                            {...register("username")}
                            id="username" 
                            name="username" 
                            placeholder="Joe Black"
                            type='text'
                            className={inputTailwind}
                            minLength={3}
                            maxLength={150}
                            disabled={isactiveInput}
                            //required
                            />
                </label>
                <label htmlFor="email" className={labelsTailwind}>
                    *Email: <input 
                            {...register("email")}
                            id="email" 
                            name="email" 
                            placeholder="joe.black@mail.com"
                            type='email'
                            className={inputTailwind}
                            minLength={3}
                            maxLength={150}
                            disabled={isactiveInput}
                            //required
                            />
                </label>
                <label htmlFor="password" className={labelsTailwind}>
                    *Password: <input 
                                {...register("password")}
                                id="password" 
                                name="password" 
                                placeholder="*********"
                                type='password'
                                className={inputTailwind}
                                autoComplete="off"
                                minLength={3}
                                maxLength={150}
                                disabled={isactiveInput}
                                //required
                                />
                </label>
                {   buttonState?
                    <button 
                    className='w-[100%] cursor-pointer relative   p-1 text-white rounded-lg bg-amber-400 hover:opacity-40 hover:bg-amber-700'
                    type='submit'
                    disabled={isactiveInput}
                    >
                        Next
                    </button>:
                    <span 
                    className='w-[100%] block text-center cursor-pointer relative   p-1 text-white rounded-lg opacity-90 bg-amber-400'
                    >
                        {
                            <Image
                                alt='loading-gif'
                                src={Loading}
                                className='w-[10%] relative rounded-full m-auto'
                                disabled={isactiveInput}
                            />
                        }
                    </span>
                }
                
                    
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