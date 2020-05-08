import React from "react";

type RowContainerProps = {
  width: string;
}

const RowContainer = ({ children, width }: React.PropsWithChildren<RowContainerProps>) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width }}>
    { children }
  </div>
);

export default RowContainer;