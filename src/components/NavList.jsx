import styled from "styled-components";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <StyledNavList className="nav__list">
      <NavItem href="#home" label="Home" />
      <NavItem href="#about" label="About" />
      <NavItem href="#services" label="Services" />
      <NavItem href="#contact" label="Contact" />
    </StyledNavList>
  );
};

const StyledNavList = styled.ul``;

export default NavList;
