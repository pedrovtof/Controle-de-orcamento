import React from 'react' ;

const menuData = [
    {
        menuTitle:'Explore',
        content:[
            'Blog',
            'Users terms',
            'Privacity',
        ]
    },
    {
        menuTitle:"About us",
        content:[
            'History',
            'How we work?',
            'Our team',
        ]
    },
    {
        menuTitle:'Reach us',
        content:[
            'Linkedin',
            'Instagram',
            'WebSite',
        ]
    }
]

const dic = { 
    label: "CNPJ 00.000.000/0000-00",
    value: "All Rights Reserved ©Pedrovotf"
}

function Footer(){
    return(
        <React.Fragment>
            <div className='footer-container bg-gray-900 text-center  pb-4 rounded-t-lg'>
                <div className='footer-list-div flex flex-col gap-2 p-8 items-center justify-around sm:flex-row sm:items-start sm:gap-6 sm:py-4'>
                    {
                        menuData.map((item, index)=>{
                            return(
                                <React.Fragment key={`${item.menuTitle}-${index}`.trim()}>
                                    <div className={`footer-list-box-${index}`}>
                                        <h1 className={`footer-list-box-title-${index} text-gray-500 hover:bg-gray-400 text-1xl underline`}>
                                            {item.menuTitle}
                                        </h1>
                                        <ul className={`footer-list-box-ul-${index}`}>
                                            {
                                                menuData[index].content.map((itemChild,indexChild)=>{
                                                    return(
                                                        <React.Fragment key={`${itemChild}-${indexChild}`.trim()}>
                                                            <li className={`footer-list-ul-item-${index} p-1`}>
                                                                <a 
                                                                    href='https://www.linkedin.com/in/pedrovotf/'
                                                                    target='blank'
                                                                    className={`footer-list-ul-item-link-${index}  font-medium text-gray-500 hover:bg-gray-400`}>
                                                                    {itemChild}
                                                                </a>
                                                            </li>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className='rights-reserved-span-div'>
                    <span className='rights-reserved-span-value font-medium text-gray-500'>
                        {dic.label} {dic.value}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer