import React from "react";
import { Ribbon } from "../../../Components/Atom";

export default {
  title: "Atom/Ribbon",
  component: Ribbon
};

export const Ribbons = () => {
  return (
    <>
      <Ribbon type="success">This is example of success</Ribbon>
      <Ribbon type="warning">This is example of warning</Ribbon>
      <Ribbon type="error">This is example of error</Ribbon>
    </>
  );
};
