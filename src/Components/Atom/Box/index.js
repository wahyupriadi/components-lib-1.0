import React from "react";
import styled from "styled-components";
import {
  color,
  sizing,
  spacing,
  border,
  position,
  flexbox,
  display
} from "../../Utils";

const StyledBox = styled.div`
  &&& {

    ${position};
    ${display}
    ${flexbox};
    ${sizing}
    ${spacing};
    ${color}
    ${border};

    /* box-shadow: ${props => props.theme.shadow.default}; */
    &.action:hover {
      box-shadow: ${props => props.theme.shadow.hover};
    }
    &.action:active {
      box-shadow: ${props => props.theme.shadow.action};
    }
    &.disable {
      box-shadow: ${props => props.theme.shadow.disabled};
    }
  }
`;

const Box = props => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

Box.defaultProps = {
  position: "relative"
}

export default Box;
