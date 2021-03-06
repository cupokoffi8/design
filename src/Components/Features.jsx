import React from "react"; 
import { Link } from 'react-scroll'; 

function Features(){
    return(
        <div id="features"> 
        <div className='features-text'>
            <h1 data-aos="fade-down" data-aos-duration="1000">Quality Designs Made Right</h1>
            <hr data-aos="fade-down" data-aos-duration="1000" className="divider" /> 
            <p data-aos="fade-down" data-aos-duration="1000" className="feedback">
            Suzanne Clemente Handbags aren’t just beautifully styled and well made; the “Causes Series” 
            line is a stylish way to show off one’s passion for a particular cause. The ribbons and colors 
            of the “Causes Series” line represent the following causes: Back the Blue, Breast Cancer 
            Awareness, AIDS Awareness, Autism Awareness, “Support Our Troops” and LGBT Awareness. We are 
            currently developing a line for “Back the Blue”. <br /> 
            <br /> 
            We would love to hear feedback from you on your personal cause. We want to inspire positive 
            change through fashion. What’s your cause? “Wear your Cause on your sleeve!”
                </p>
            <div data-aos="fade-up" data-aos-duration="1000" className="header-btns">
                <Link to='services' className='active' smooth={true} duration={1000}><a className='cv-btn1'>Get Started!</a></Link> 
            </div> 
            </div> 
        </div> 
    )
}

export default Features; 