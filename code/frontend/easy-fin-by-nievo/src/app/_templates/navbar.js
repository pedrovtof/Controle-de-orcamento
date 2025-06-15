"use client"
import React from 'react'
import Image from 'next/image'
import MenuIcon from '../../../public/icons/icon_menu_hamburguer_amber.png'
import LogoutIcon from '../../../public/icons/logout_menu_amber.png'
import NavBarSubmenu from '@/app/_templates/navbarSubMenu'

function NavBar(props){

    const [activeMenu, setActiveMenu]   = React.useState(false)

    const handlerSubMenu =()=>{
        setActiveMenu(!activeMenu)
    }

    return(
        <React.Fragment>
            <div 
                className=' bg-gray-900 p-3 rounded-b-md flex items-center justify-between'>
                <div className='text-center'>
                    <Image
                        alt='Menu-hamburguer'
                        src={MenuIcon}
                        className='hover:opacity-40'
                        onClick={handlerSubMenu}
                    />
                    {
                        activeMenu===true?
                        <NavBarSubmenu/>
                        :null
                    }
                </div>
                <div>
                    <h1
                        className='font-medium text-amber-400'
                    >
                        {props.AppNameMainTitleFromNavBar}
                    </h1>
                </div>
                <div className='text-center'>
                    <button>
                        <Image
                            alt='logout-icon'
                            src={LogoutIcon}
                            className='hover:opacity-40'
                        />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar