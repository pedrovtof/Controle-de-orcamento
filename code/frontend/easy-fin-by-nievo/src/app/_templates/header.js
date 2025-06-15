import React from 'react' ;
import NavBar from '@/app/_templates/navbar'

function Header(props){
    return(
        <React.Fragment>
                <NavBar 
                    AppNameMainTitleFromNavBar={props.Nav}
                />
        </React.Fragment>
    )
}

export default Header