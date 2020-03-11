import React from "react";
import { Box, Text } from "../../../Components/Atom";
import mdx from "./Box.mdx";

export default {
  title: "Atom/Box",
  component: Box,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Margin = () => {
  return (
    <Box bg="primary">
      <Box m={16}>
        <Text type="B1" color="white">This Box with margin</Text>
      </Box>
    </Box>
  );
};

export const Padding = () => {
  return (
    <Box bg="primary">
      <Box p={16}>
        <Text type="B1" color="white">This Box with padding</Text>
      </Box>
    </Box>
  );
};

export const BackgroundColor = () => {
  return (
    <>
    <Box bg="blue30" p={8}>
      <Text type="B1" color="white">This Box background-color blue30</Text>
    </Box>
    <Box p={8}>
      <Text type="B1" color="blue30">This Box background-color red30</Text>
    </Box>
    </>
  );
};

export const Border = () => {
  return (
    <Box border="1px solid dark" p={8}>
      <Text type="B1">I'm a text inside of Box</Text>
    </Box>
  );
};