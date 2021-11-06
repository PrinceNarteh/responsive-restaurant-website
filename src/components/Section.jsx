import { styled } from "styled-components";

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: 4rem 0 2rem;

  .section-title,
  .section-subtitle {
    text-align: center;
  }

  .section-title {
    font-size: var(--h1-font-size);
    color: var(--title-color);
    margin-bottom: var(--mb-3);
  }

  .section-subtitle {
    display: block;
    color: var(--first-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1);
  }
`;

export default Section;
