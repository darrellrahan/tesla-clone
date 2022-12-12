import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCenterItems } from "../features/centerHeader/centerHeaderSlice";
import { selectRightItems } from "../features/rightHeader/rightHeaderSlice";
import { selectBurgerItems } from "../features/burger/burgerSlice";
import { useSelector } from "react-redux";
import { Drawer, ListItem, ListItemText } from "@mui/material";

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);
  const centerItems = useSelector(selectCenterItems);
  const rightItems = useSelector(selectRightItems);
  const burgerItems = useSelector(selectBurgerItems);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" />
      </a>
      <CenterMenu>
        {centerItems &&
          centerItems.map((item, index) => (
            <a key={index} href="#" className="hover-bg">
              {item}
            </a>
          ))}
      </CenterMenu>
      <RightMenu>
        {rightItems &&
          rightItems.map((item, index) => (
            <a key={index} href="#" className="collapse hover-bg">
              {item}
            </a>
          ))}
        <a href="#" className="menu hover-bg" onClick={() => setIsBurger(true)}>
          Menu
        </a>
      </RightMenu>
      <Drawer
        open={isBurger}
        anchor={"right"}
        onClose={() => setIsBurger(false)}
      >
        <div
          style={{ width: 300, padding: "28px" }}
          onClick={() => setIsBurger(false)}
        >
          <CloseWrapper>
            <Close className="hover-bg" />
          </CloseWrapper>
          {burgerItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  style: { fontSize: "18px" },
                }}
              />
            </ListItem>
          ))}
        </div>
      </Drawer>
    </Container>
  );
};

export default Header;

// CSS

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  z-index: 1;
`;

const CenterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 550;
    font-size: 18px;
    padding: 8px;
    flex-wrap: nowrap;
    margin: 0 10px;
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 550;
    font-size: 18px;
    padding: 8px;
    margin: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1280px) {
    .collapse {
      display: none;
    }
    .menu {
      background-color: rgba(0, 0, 0, 0.05);
      padding: 8px;
      width: 85px;
      border-radius: 8px;
    }
  }
`;

const CloseWrapper = styled.div`
  padding: 10px 0 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;
