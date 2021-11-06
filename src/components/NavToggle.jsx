import { BiMenu } from "react-icons/bi";
import styled from "styled-components";

const NavToggle = () => {
  return (
    <StyledNavToggle className="nav__toggle">
      <BiMenu />
    </StyledNavToggle>
  );
};

const StyledNavToggle = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
`;

export default NavToggle;
