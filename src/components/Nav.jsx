import styled from "styled-components";

const Nav = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

const StyledNav = styled.nav`
  max-width: 1024px;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export default Nav;
