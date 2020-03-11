import React from "react";
import styled from "styled-components";
import Box from "../Box";

const StyledContainer = styled(Box)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: ${props => (props.fluid ? "100%" : "1140px")};
`;

const Container = props => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
