import styled from "styled-components";

const NavItem = ({ href, label }) => {
  return (
    <StyledNavItem>
      <a href={href} className="nav__link">
        {label}
      </a>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  margin-bottom: var(--mb-2);

  .nav__link {
    transition: 0.3s;
  }

  .nav__link:hover {
    color: var(--first-color);
  }
`;

export default NavItem;
