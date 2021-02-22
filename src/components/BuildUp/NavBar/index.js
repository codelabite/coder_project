import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <FaMagento style={{ marginRight: "10px" }} />
            Teens Project
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/ndidi">Ndidi</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/ola">Ola</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/gideon">Gideon</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/lekan">Lekan</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/olorunda">Olorunda</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/peter">Peter Pan Awesome</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Get Started</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin">Get Started</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
