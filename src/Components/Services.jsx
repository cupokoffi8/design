import React from "react"; 
import { FaShoppingBag, FaPaw, FaDesktop } from "react-icons/fa";

function Services(){
    return(
        <div id="services"> 
        <h3 className="s-heading">Explore What We Have to Offer</h3>
            <div class="b-container">
            <div id="s-box"> 
                <div className="s-b-img"> 
                    <FaShoppingBag className="icon" />
                </div> 
                <div className="s-b-text">
                    <h3>
                    Handbags
                    </h3>
                    <p>
                    Custom styling and elegant manufacturing
                    </p>
                </div>
            </div> 

            <div id="s-box"> 
                <div className="s-b-img"> 
                    <FaPaw className="icon" /> 
                </div> 
                <div className="s-b-text">
                    <h3>
                    Pet Carriers
                    </h3>
                    <p>
                    An appealing and efficient way for your pets to accompany you on trips
                    </p>
                </div>
            </div> 

            <div id="s-box"> 
                <div className="s-b-img"> 
                    <FaDesktop className="icon" /> 
                </div> 
                <div className="s-b-text">
                    <h3>
                    Digital Styling
                    </h3>
                    <p>
                    Skilled in using Adobe Illustrator and Photoshop to create and edit designs
                    </p> 
                </div>
            </div> 
            </div>
        </div> 
    )
}

export default Services; 