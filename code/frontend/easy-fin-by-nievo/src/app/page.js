import React from 'react' 
import Image from 'next/image'
import Logo from '../../public/logos/logo_template_default.png'

export default function Home() {
  return (
      <React.Fragment>
        <div className='flex flex-col w-fit sm:w-[40%] h-[85vh] rounded-lg justify-evenly text-center self-center m-auto mb-[1%] mt-[1%] items-center bg-gray-900 '>
          <Image
            alt='logo-brand'
            src={Logo}
            className='w-[18%] rounded-full '
          />
          <h1 className='font-bold w-fit text-3xl text-amber-400'>
            Nievo Fin
          </h1>
          <button className=' w-[30%] p-1 text-white rounded-lg bg-amber-400 hover:opacity-40 hover:bg-amber-700'>
            Begin
          </button>
        </div>
      </React.Fragment>
    
  );
}
