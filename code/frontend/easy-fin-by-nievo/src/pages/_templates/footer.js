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

function Footer(){
    return(
        <React.Fragment>
            <div>
                <div>
                    {
                        menuData.map((item, index)=>{
                            return(
                                <React.Fragment key={`${item.menuTitle}-${index}`.trim()}>
                                    <div>
                                        <h1>{item.menuTitle}</h1>
                                        <ul>
                                            {
                                                menuData[index].content.map((itemChild,indexChild)=>{
                                                    return(
                                                        <React.Fragment key={`${itemChild}-${indexChild}`.trim()}>
                                                            <li>{itemChild}</li>
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
            </div>
            <p>CNPJ 00.000.000/0000-00 All Rights Reserved ©Pedrovotf</p>
        </React.Fragment>
    )
}

export default Footer