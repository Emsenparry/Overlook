// Importer de nødvendige dependencies og modules.
import React from "react";
import Carousel from "react-material-ui-carousel";
import ImageSlider from "./ImageSlider";
import "./Carousel.scss";

// Definer en funktion kaldet Item som tager et parameter (props)
const Item = (props) => {
  // Retunere images fra ImageSlider.js
  return (
    <img
      src={props.item.images}
      alt={props.item.title}
      className="slider-images"
    />
  );
};

const HeroSlider = () => {
  const carouselSettings = {
    // Animation til karusellen
    animation: "fade",
    // Kontrollér, hvor hyppigt karusellen skal skifte.
    interval: 3000,
    // Sæt dette til sandt for at skjule pilene.
    navButtonsAlwaysInvisible: true
  };


  return (
    <div className="slider-container">
      {/* Returnere Carousel-komponent fra react-material-ui-carousel biblioteket */}
      <Carousel {...carouselSettings}>
        {/* Mapper igennem ImageSlider og viser hvert element som en Item-komponent */}
        {ImageSlider.map((data) => (
          // For hvert objekt i ImageSlider, opretter denne kode en Item-komponent
          // med det rigtige billede og data, så de kan vises karusellen.
          <Item key={data.id} item={data} />
        ))}
      </Carousel>
    </div>
  );
};

// Exporter som named
export { HeroSlider, Item };
