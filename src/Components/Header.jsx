import React from "react"; 
import Navbar from './Navbar'; 
import { Link } from 'react-scroll'; 

function Header(){
    return(
        <div id="main"> 
            <Navbar /> 
            <div className='name'>
                <h1 className='the-header'>Find Unique Styles That Fit Your Every Desire</h1>
                <p className='details'>Through both great passion and expertise, Suzanne has fabricated a wide variety of products that are sure to draw you in!</p> 
                <div className='header-btns'>
                    <Link to='features' className='active' smooth={true} duration={1000}><a className='cv-btn'>Learn More</a></Link> 
                </div>
            </div>
        </div> 
    )
}

export default Header; 