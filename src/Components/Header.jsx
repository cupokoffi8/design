import React from "react"; 
import Navbar from './Navbar'; 

function Header(){
    return(
        <div id="main"> 
            <Navbar /> 
            <div className='name'>
                <h1>Find Unique Styles That Fit Your Every Desire</h1>
                <p className='details'>Through both great passion and expertise, Suzanne has fabricated a wide variety of products that are sure to draw you in!</p> 
                <div className='header-btns'>
                    <a href='#' className='cv-btn'>Learn More</a>
                </div>
            </div>
        </div> 
    )
}

export default Header; 