import React from "react";
import ImageHeader from "../../../Partials/ImageHeader/ImageHeader";
import "./Land.scss";
import LandNav from "../../../Partials/LandNav/LandNav";

const Land = () => {
  return (
    <>
      <div className="ImageHeader">
        <ImageHeader
          img={require("../../../../Assets/images/seljalandvoss-iceland.jpg")}
        />
      </div>
      <LandNav />
    </>
  );
};

export default Land;
