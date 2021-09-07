import React from 'react';
import logo from './logo.png';



const Header = ({title}) => {
    return (
        <div>
            <img src={logo} alt='logo' width='300px' ></img> 
           
            <h1>{title}</h1> 
        </div>
    )
}

export default Header
