import React from 'react'

function NavBar(props){
    return(
        <React.Fragment>
            <h1>
                {props.AppNameMainTitleFromNavBar}
            </h1>
        </React.Fragment>
    )
}

export default NavBar