import React from "react"; 
import { Link } from 'react-scroll'; 

function Features(){
    return(
        <div id="features"> 
        <div className='features-text'>
            <h1>Quality Designs Made Right</h1>
            <hr className="divider" /> 
            <p>
            With years of experience and an education from both the Fashion Institute of Technology and Pratt, Suzanne means business. After having dealt with a multitude of products ranging from low-quality to overpriced brand names, Sue wants to make a statement, showing that great design and quality doesn't have to break the bank.
            </p>
            <div className="header-btns">
                <Link to='services' className='active' smooth={true} duration={1000}><a className='cv-btn1'>Get Started!</a></Link> 
            </div> 
            </div> 
        </div> 
    )
}

export default Features; 