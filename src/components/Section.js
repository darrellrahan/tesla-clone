import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

const Section = (prop) => {
  return (
    <Wrap bgImg={prop.img}>
      <Fade bottom>
        <ItemText>
          <h1 style={{ fontSize: "3rem" }}>{prop.model}</h1>
          <p style={{ marginTop: "8px" }}>{prop.desc}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton rBtn={prop.rBtnText}>{prop.lBtnText}</LeftButton>
          </Fade>
          {prop.rBtnText && (
            <Fade right>
              <RightButton>{prop.rBtnText}</RightButton>
            </Fade>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(prop) => `url("/images/${prop.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, ${(prop) => (prop.rBtn ? "0.9" : "1")});
  opacity: ${(prop) => (prop.rBtn ? "0.9" : "1")};
  color: white;
  text-transform: capitalize;
  width: 256px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
`;

const RightButton = styled(LeftButton)`
  color: black;
  background-color: white;
  opacity: 0.7;
`;

const Buttons = styled.div``;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
