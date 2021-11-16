import React from 'react'

import Header from "../Components/Custom/Header/Header"

const MainLayaut = props => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default MainLayaut
