import React from "react";
import { Box, Spinner, Text } from "../../../Components/Atom";

export default {
  title: "Atom/Spinner",
  component: Spinner
};

export const _0Spinner = () => {
  return (
    <>
      <Box width={120} height={120}>
        <Spinner />
      </Box>
    </>
  );
};

export const Color = () => {
  return (
    <>
      <Box width={120} height={120}>
        <Spinner color="#000000" />
      </Box>
    </>
  );
};

export const Speed = () => {
  return (
    <>
      <Box width={120} height={120}>
        <Spinner speed={2} />
      </Box>
    </>
  );
};
