import React from "react";
import ImageHeader from "../../../Partials/ImageHeader/ImageHeader";
import "./Land.scss";
import LandNav from "../../../Partials/LandNav/LandNav";
import { ContentWrapper } from "../../../ContentWrapper/ContentWrapper";

const Land = () => {
  return (
    <>
    <ContentWrapper title="Hoteller og destinationer">
      <div className="ImageHeader">
        <ImageHeader
          img={require("../../../../Assets/images/seljalandvoss-iceland.jpg")}
        />
      </div>
      <LandNav />
      </ContentWrapper>
    </>
  );
};

export default Land;
