import React from "react"; 
import { Link } from 'react-scroll'; 

function Navbar(){
    return(
        <>
            <nav>
                <Link to='main' className='logo' smooth={true} duration={1000} >
                    <h1>Suzanne Clemente</h1>  
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/> 
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label> 
                <ul className='menu'>
                    <li><Link to='main' className='active' smooth={true} duration={1000} >Home</Link></li>
                    <li><Link to='features' className='active' smooth={true} duration={1000}>About</Link></li>
                    <li><Link to='services' className='active' smooth={true} duration={1000}>Services</Link></li>
                    <li><Link to='design' className='active' smooth={true} duration={1000}>Designs</Link></li>
                    <li><Link to='contact' className='active' smooth={true} duration={1000}>Contact</Link></li> 
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 