import React from "react";
const Img = props => {
  return (
    <img
      id="logo"
      src={require("../assets/images/house-logo.jpg")}
      alt="Izuking"
      {...props}
    />
  );
};
export default Img;
