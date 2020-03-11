import React, {useEffect} from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import { StyledIcon } from "../../Atom/Icon";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: ${props => (props.isOpen ? "hidden" : "scroll")};
  }
`
const TrayWrapper = styled.div`
  position: fixed;
  bottom: ${props => (props.isOpen ? "0px" : "-60%")};
  left: 0px;
  width: 100%;
  transition: all 300ms ease;
  z-index: ${props => props.theme.zindex.modal};
`;

const TrayOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  background-color: rgba(21, 24, 35, 0.8);
  transition: all 300ms ease;
  z-index: ${props => props.theme.zindex.modalbg};
`;

const TrayHeader = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 16px;
  background-color: #FFFFFF;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid  ${props => props.theme.color.black30};
  justify-content: space-between;
  ${StyledIcon} {
    text-align: right;
    font-size:24px;
  }
`;

const TrayTitle = styled.h3`
  color: ${props => props.theme.color.black70};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

const TrayContent = styled.div`
  max-height:240px;
  background-color: #FFFFFF;
  overflow-y: auto;
`;

const TrayFooter = styled.div`
  padding: 16px;
  border-top: 1px solid ${props => props.theme.color.black30};
  background-color: ${props => props.theme.color.white};
`;

const Tray = ({ children, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : "" ;
  }, [props.isOpen])
  
  return (
    <>
      <GlobalStyle {...props} />
      <TrayOverlay {...props} onClick={props.overlayClick} />
      <TrayWrapper {...props}>
        {children}
      </TrayWrapper>
    </>
  );
};

Tray.displayName = "Tray";
TrayHeader.displayName = "TrayHeader";
TrayContent.displayName = "TrayContent";
TrayFooter.displayName = "TrayFooter";
export default Tray;
export { TrayHeader, TrayTitle, TrayContent, TrayFooter };
