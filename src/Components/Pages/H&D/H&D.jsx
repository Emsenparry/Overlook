import { ContentWrapper } from "../../ContentWrapper/ContentWrapper";
import ImageHeader from "../../Partials/ImageHeader/ImageHeader";
import { HotelList } from "../../Partials/LandNav/LandNav";
import './H&D.scss';

const Destinations = () => {
  return (
    <>
      <ContentWrapper title="Hoteller og destinationer">
        <div className="ImageHeader">
          <ImageHeader
            img={require("../../../Assets/images/seljalandvoss-iceland.jpg")}
          />
        </div>
        <section>
          <article className="Wrapper">
            <div><HotelList /></div>
            <div></div>
          </article>
        </section>
        
      </ContentWrapper>
    </>
  );
};

export { Destinations };