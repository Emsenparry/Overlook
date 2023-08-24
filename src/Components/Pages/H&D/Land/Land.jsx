import ImageHeader from "../../../Partials/ImageHeader/ImageHeader";
import { HotelList, HotelNav } from "../../../Partials/LandNav/LandNav";
import { ContentWrapper } from "../../../ContentWrapper/ContentWrapper";
import { InfoWrapper } from "./Land.style";
import { Outlet } from "react-router-dom";

const Land = () => {
  return (
    <>
      <ContentWrapper title="Hoteller og destinationer">
        <div className="ImageHeader">
          <ImageHeader
            img={require("../../../../Assets/images/seljalandvoss-iceland.jpg")}
          />
        </div>
        <HotelNav />
        <section>
          <InfoWrapper>
            <div><HotelList /></div>
            <div><Outlet /></div>
          </InfoWrapper>
        </section>
      </ContentWrapper>
    </>
  );
};

export { Land };
