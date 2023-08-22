import React from "react";
import { ContentWrapper } from "../../ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <ContentWrapper title="Siden blev ikke fundet">
      <p>Siden du leder efter findes ikke.</p>
      <p>
        <Link to="/">Gå til forsiden</Link>
      </p>
    </ContentWrapper>
  );
};

export default NotFound;
