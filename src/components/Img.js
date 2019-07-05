import React from "react";
const Img = props => {
  return (
    <img
      className="logo"
      src={require("../assets/images/house-logo.jpg")}
      alt="logo"
      {...props}
    />
  );
};
export default Img;
