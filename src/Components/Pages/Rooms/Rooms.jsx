import React from "react";
import { ContentWrapper } from "../../ContentWrapper/ContentWrapper";
import ImageHeader from "../../Partials/ImageHeader/ImageHeader";
import { ReactComponent as SiteHeader } from "../../../Assets/SVG/Site Headers.svg";
import "./Rooms.scss";

const Rooms = () => {
  return (
    <ContentWrapper title="Værelser">
      <div className="hero-header2">
        <div className="title2">
          <h2>Hoteller og Destinationer</h2>
          <SiteHeader />
        </div>
      </div>
      <div className="ImageHeader">
        <ImageHeader
          img={require("../../../Assets/images/frankfurt-skyline-germany-resize.jpg")}
        />
      </div>
    </ContentWrapper>
  );
};

export default Rooms;
