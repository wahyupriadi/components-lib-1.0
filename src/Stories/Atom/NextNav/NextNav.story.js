import React from "react";
import { Box, NextNavButton, PrevNavButton } from "../../../Components/Atom";

export default {
  title: "Atom/Next-Navigation Button",
  component: { Box, NextNavButton, PrevNavButton }
};

export const NextNavigation = () => {
  return (
    <Box p={16} bg="black20">
      Lorem Ipsum
      <NextNavButton />
    </Box>
  );
};
export const PrevNavigation = () => {
  return (
    <Box p={16} bg="black20">
      <PrevNavButton />
      Lorem Ipsum
    </Box>
  );
};
