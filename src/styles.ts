import { secondary, medium, text, accent } from "./style_variables";
import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1920px;
`;

export const BackgroundImg = styled.div`
  width: 38%;
  position: absolute;
  right: 20px;
  pointer-events: none;
  @media (max-width: ${medium}px) {
    width: 80%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
  }
`;

export const NameContainer = styled.div`
  width: 80%;
  color: ${secondary};
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${medium}px) {
    width: 100%;
    z-index: 1;
  }
`;

export const NavButtons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  @media (max-width: ${medium}px) {
    flex-direction: column;
  }
`;

export const PageHeader = styled(NameContainer)`
  width: 30%;
  position: absolute;
  z-index: 0;
`

export const PageWrapper = styled(LandingPageWrapper)`
  height: auto;
`

export const Paragraph = styled.p`
  font-size: 2rem;
  max-width: 1200px;
  text-align: justify;
  z-index: 1;
  color: ${text};
  position: relative;
  :before {
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    height  : 1px;
    width   : 70%;
    border-bottom: 3px solid ${accent};
  }
`

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 80px 50px 0px 50px;
  width: 100%;
  p:nth-child(2) {
    align-self: flex-end;
  }
`

export const ParagraphBackgroundImg = styled(BackgroundImg)`
  opacity: 50%;
  width: 80%;
  left: 0;
  right: 0;
  bottom: 20%;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
`;