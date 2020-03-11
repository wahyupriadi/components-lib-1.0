import React, {useEffect}from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TrayFullWrapper = styled.div`
  position: fixed;
  z-index: ${props => props.theme.zindex.modal};
  bottom: 0px;
  left: 0px;
  overflow-y: auto;
  width: 100%;
  height:100%;
  transition: all 300ms ease;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  background-color: ${props => props.theme.color.black20};
`;

const TrayFull = ({ children, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : "" ;
  }, [props.isOpen])

  return (
    <>
      <TrayFullWrapper {...props}>
        {children}
      </TrayFullWrapper>
    </>
  );
};

TrayFull.defaultProps = {
  isOpen: "false",
};

TrayFull.propTypes = {
  isOpen: PropTypes.bool,
  overlayClick: PropTypes.func
}

TrayFull.displayName = "TrayFull";

export default TrayFull;
