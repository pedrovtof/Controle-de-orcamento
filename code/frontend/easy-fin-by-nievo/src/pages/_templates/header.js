import React from 'react' ;
import NavBar from '@/pages/_templates/navbar'

const metadata ={
    'Nav':'Easy Fin By Nievo'
}

function Header(){
    return(
        <React.Fragment>
                <NavBar 
                    AppNameMainTitleFromNavBar={metadata.Nav}
                />
        </React.Fragment>
    )
}

export default Header