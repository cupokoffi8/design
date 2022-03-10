import React from "react"; 
import Navbar from './Navbar'; 
import { Link } from 'react-scroll'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Header(){
    AOS.init();
    return(
        <div id="main"> 
            <Navbar /> 
            <div className='name'>
                <h1 data-aos="fade-right" data-aos-duration="1000" className='the-header'>Find Unique Styles That Fit Your Every Desire</h1>
                <p data-aos="fade-right" data-aos-duration="1200" className='details'>Through both great passion and expertise, Suzanne has fabricated a wide variety of products that are sure to draw you in!</p> 
                <div data-aos="fade-right" data-aos-duration="1800" className='header-btns'>
                    <Link to='features' className='active' smooth={true} duration={1000}><a className='cv-btn'>Learn More</a></Link> 
                </div>
            </div>
        </div> 
    )
}

export default Header; 