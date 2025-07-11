import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logos/logo_template_escrito.png'

function FormDefault({children}){
    return(
        <React.Fragment>
            <div className='text-center m-auto'>
                <Image
                    alt='logo-brand'
                    src={Logo}
                    className='w-[18%] rounded-full  m-auto'
                    priority
                />
           </div>
           <div className='flex h-full gap-4 flex-col w-[60%] sm:w-[20%] rounded-lg justify-evenly text-left self-center m-auto mb-[1%] items-center bg-gray-900'>
            {children}
           </div>
        </React.Fragment>
    )
}

export default FormDefault