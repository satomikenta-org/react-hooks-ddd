import React from "react";

const headerStyle = {
  width: "100%",
  backgroundColor: "#82d9f9",
  padding: "5px"
}

const PrimaryLayout = ({ children }: any) => (
  <div>
    <h2 style={ headerStyle }> Twiiitter </h2>
    { children }
  </div>
);


export default PrimaryLayout;