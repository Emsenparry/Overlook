import ImageHeader from "../../../Partials/ImageHeader/ImageHeader";
import { HotelList } from "../../../Partials/LandNav/LandNav";
import { ContentWrapper } from "../../../ContentWrapper/ContentWrapper";
import { InfoWrapper } from "./Land.style";

const Land = () => {
  return (
    <>
      <ContentWrapper title="Hoteller og destinationer">
        <div className="ImageHeader">
          <ImageHeader
            img={require("../../../../Assets/images/seljalandvoss-iceland.jpg")}
          />
        </div>
        <section>
          <InfoWrapper>
            <div><HotelList /></div>
            <div></div>
          </InfoWrapper>
        </section>
      </ContentWrapper>
    </>
  );
};

export { Land };
