import React from 'react'
import { useRouter } from 'next/navigation'

const metadata = {
    submenu:[
        {
            label:"Home",
            value:"home"
        },
        {
            label:"Overview",
            value:"overview"
        },
        {
            label:"Transaction",
            value:"transaction"
        },
        {
            label:"Category",
            value:"category"
        },
        {
            label:"Sub Category",
            value:"sub_category"
        },
        {
            label:"Goal",
            value:"goal"
        },
        {
            label:"Acount",
            value:"account"
        },
        {
            label:"Card",
            value:"card"
        }
    ]
}


function NavBarSubmenu(props){

    const router = useRouter()

    return(
        <React.Fragment>
            <ul dir="rtl" className='fixed bg-gray-900 left-0 shadow-xl/20 h-fit rounded-s-lg  p-3 flex flex-col justify-between py-4 gap-2 w-48'>
            {
                metadata.submenu.map((item,index)=>{
                    return(
                        
                            <li 
                                key={`li-submenu-hover-${index}`}
                                className='w-full p-1 rounded-lg bg-amber-400 hover:opacity-40 hover:bg-amber-700'
                            >
                                <a  
                                    className='text-l text-white w-full block cursor-pointer'
                                    key={`li-a-submenu-hover-${index}`} 
                                    onClick={() => router.push(item.value)}
                                >
                                    {item.label}
                                </a>
                            </li>
                    )
                })
            }
            </ul>
        </React.Fragment>
    )
}

export default NavBarSubmenu