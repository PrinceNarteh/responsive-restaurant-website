import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import NavList from "./NavList";
import NavToggle from "./NavToggle";

const Header = () => {
  return (
    <StyledHeader className="l-header">
      <Nav className="bd-container">
        <Logo />

        <div className="nav__menu" id="nav-menu">
          <NavList />
        </div>

        <NavToggle />
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  .nav__link,
  .nav__logo,
  .nav__toggle {
    color: var(--text-color);
    font-weight: var(--font-medium);
  }

  @media screen and (max-width: 768px) {
    .nav__menu {
      position: fixed;
      top: var(--header-height);
      left: 0;
      width: 100%;
      padding: 1.5rem 0 1rem;
      text-align: center;
      background-color: var(--body-color);
      transition: 0.4s;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 1rem 1rem;
      z-index: var(--z-index);
    }
  }
`;

export default Header;
