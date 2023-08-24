import React from "react";
import './ImageHeader.scss'


const ImageHeader = ({ img }) => {
  return (
    <>
      <img src={img} alt="heroimage" />
    </>
  );
};

export default ImageHeader;
