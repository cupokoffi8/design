import React from "react"; 
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./style.css";
import Image1 from "../Images/s-images/1.png";
import Image2 from "../Images/s-images/2.png"; 
import Image3 from "../Images/s-images/3.png"; 
import Image4 from "../Images/s-images/4.png";  
import Image5 from "../Images/s-images/5.png"; 
import Image6 from "../Images/s-images/6.png"; 
import Image7 from "../Images/s-images/7.png"; 
import Image8 from "../Images/s-images/8.png"; 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <> 
      <div className="Slider" style={{marginTop: '50px'}}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={Image1} className="slider-image" alt="image1"/> 
          </Item>
          <Item>
            <img src={Image2} className="slider-image" alt="image2"/> 
          </Item>
          <Item>
            <img src={Image3} className="slider-image" alt="image3"/> 
          </Item>
          <Item>
            <img src={Image4} className="slider-image" alt="image4"/> 
          </Item>
          <Item>
            <img src={Image5} className="slider-image" alt="image5"/> 
          </Item>
          <Item>
            <img src={Image6} className="slider-image" alt="image6"/> 
          </Item> 
          <Item>
            <img src={Image7} className="slider-image" alt="image7"/> 
          </Item> 
          <Item>
            <img src={Image8} className="slider-image" alt="image8"/> 
          </Item> 
        </Carousel>
      </div>
    </>
  );
}

export default Slider; 