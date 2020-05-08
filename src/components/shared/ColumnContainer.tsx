import React from "react";

type ColumnContainerProps = {
  width: string;
}

const ColumnContainer = ({ children, width }: React.PropsWithChildren<ColumnContainerProps>) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width }}>
    { children }
  </div>
);

export default ColumnContainer;