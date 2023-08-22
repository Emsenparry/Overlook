import React from "react";
import Carousel from "react-material-ui-carousel";
import ImageSlider from "./ImageSlider";
import "./Carousel.scss"; 

const Item = (props) => {
  return <img src={props.item.url} alt={props.item.title} className="slider-images" />;
};

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel animation="fade" interval={3000}>
        {ImageSlider.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export { Slider, Item };
