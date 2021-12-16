import React from "react"; 
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./style.css";
import Image1 from "../Images/suzanne-clemente/Causes-BlackRed/main.jpg";
import Image2 from "../Images/suzanne-clemente/CausesBucket-Purple/main.jpg"; 
import Image3 from "../Images/suzanne-clemente/CausesSmall-Grey/main.jpg"; 
import Image4 from "../Images/suzanne-clemente/CausesWallet-Pink/main.jpg";  
import Image5 from "../Images/suzanne-clemente/CausesSmall-BlackRed/side.jpg"; 
import Image6 from "../Images/suzanne-clemente/CausesWallet-Purple/top.jpg"; 

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
        </Carousel>
      </div>
    </>
  );
}

export default Slider; 