import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCenterItems } from "../features/centerHeader/centerHeaderSlice";
import { selectRightItems } from "../features/rightHeader/rightHeaderSlice";
import { selectBurgerItems } from "../features/burger/burgerSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
            <a key={index} href="#">
              {item}
            </a>
          ))}
      </CenterMenu>
      <RightMenu>
        {rightItems &&
          rightItems.map((item, index) => (
            <a key={index} href="#" className="collapse">
              {item}
            </a>
          ))}
        <a href="#" className="menu" onClick={() => setIsCollapsed(true)}>
          Menu
        </a>
      </RightMenu>
      {isCollapsed && (
        <BurgerNav>
          <CloseWrapper>
            <Close onClick={() => setIsCollapsed(false)} />
          </CloseWrapper>
          {burgerItems &&
            burgerItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
        </BurgerNav>
      )}
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
    padding: 0 16px;
    flex-wrap: nowrap;
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
    padding: 0 16px;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 320px;
  list-style: none;
  padding: 32px;
  text-align: left;
  display: flex;
  flex-direction: column;

  li {
    padding: 16px 0;

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;
