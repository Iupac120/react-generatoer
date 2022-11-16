import React from "react"

const Header=()=>{
    return(
        <header className="header">
            <img src={require('../image/troll-face.jfif')} width="40" alt="troo-face" className="header--image"/>
            <h2 className="header--title">Header component </h2>
            <h4 className="header--project">React Course-Project 3</h4>
        </header>
    )
}

export default Header