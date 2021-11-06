import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo href="#home" className="nav__logo">
      Tasty
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  &:hover {
    color: var(--first-color);
  }
`;

export default Logo;
