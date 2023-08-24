import ImageHeader from "../../../Partials/ImageHeader/ImageHeader";
import { HotelList } from "../../../Partials/LandNav/LandNav";
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
        <section>
          <article>
            <div><HotelList /></div>
            <div></div>
          </article>
        </section>
        
      </ContentWrapper>
    </>
  );
};

export { Land };
