import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        model="Model 3"
        desc="Schedule a Test Drive"
        img="model-3.jpg"
        lBtnText="custom order"
        rBtnText="existing inventory"
      />
      <Section
        model="Model Y"
        desc="Schedule a Test Drive"
        img="model-y.jpg"
        lBtnText="custom order"
        rBtnText="existing inventory"
      />
      <Section
        model="Model S"
        desc="Schedule a Test Drive"
        img="model-s.jpg"
        lBtnText="custom order"
        rBtnText="existing inventory"
      />
      <Section
        model="Model X"
        desc="Schedule a Test Drive"
        img="model-x.jpg"
        lBtnText="custom order"
        rBtnText="existing inventory"
      />
      <Section
        model="Solar Panels"
        desc="Lowest Cost Solar Panels in America"
        img="solar-panel.jpg"
        lBtnText="order now"
        rBtnText="learn more"
      />
      <Section
        model="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        img="solar-roof.jpg"
        lBtnText="order now"
        rBtnText="learn more"
      />
      <Section model="Accessories" img="accessories.jpg" lBtnText="shop now" />
    </Container>
  );
};

export default Home;

// CSS

const Container = styled.div`
  height: 100vh;
`;
