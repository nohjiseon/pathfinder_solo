import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import IcMenu from "../../assets/images/menu.png";
import IcMenuOpen from "../../assets/images/menu_open.png";
import logo from "../../assets/images/logo.png";
import logoTxt from "../../assets/images/logo_txt.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const MenuHandeler = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderCon>
      <Logo to="/">
        <img src={logo} />
        <img src={logoTxt} />
      </Logo>
      <BtnBox>
        <MenuBtn className={isOpen ? "active" : ""} onClick={MenuHandeler}></MenuBtn>

        <Menu className={isOpen ? "active" : ""}>
          <Link to="/" onClick={MenuHandeler}>
            인트로
          </Link>
          <Link to="/areamap" onClick={MenuHandeler}>
            지역별 날씨
          </Link>
          <Link to="/recommend" onClick={MenuHandeler}>
            여행지 추천
          </Link>
        </Menu>
      </BtnBox>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.header`
  position: fixed;
  left: 20px;
  right: 20px;
  top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 1920px;
  margin: 0 auto;
  margin-bottom: 10px;
  z-index: 100;

  &:after {
    content: "";
    position: absolute;
    top: -10px;
    left: -20px;
    width: calc(100% + 40px);
    height: 70px;
    /* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 80%, transparent); */
    background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 97.3%, 0.95) 44%,
      hsla(0, 0%, 97.3%, 0.46) 73%,
      hsla(0, 0%, 100%, 0)
    );
    z-index: -1;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 3px 4px 7px rgba(190, 190, 190, 0.3);
    z-index: 1;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  > img:first-child {
    height: 26px;
  }
  > img:last-child {
    height: 16px;
    margin-left: 14px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 2;
`;

const MenuBtn = styled.button`
  width: 32px;
  height: 32px;
  background: url(${IcMenu}) no-repeat center / 32px;
  transition: 0.3s;
  &.active {
    background-image: url(${IcMenuOpen});
  }
`;

const Menu = styled.div`
  position: absolute;
  right: -20px;
  top: 55px;
  width: 231px;
  background-color: #fff;
  box-shadow: 3px 4px 7px rgba(190, 190, 190, 0.3);
  border-radius: 8px;
  padding: 10px 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  > a,
  div {
    display: block;
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    border-radius: 4px;
    font-size: 14px;
    transition: 0.3s;
    &:nth-child(5) {
      color: #f36c68;
    }
    &:hover {
      background-color: #dde8ff;
      color: #416dc9;
    }
  }
`;
