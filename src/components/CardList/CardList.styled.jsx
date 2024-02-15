import styled from "styled-components";

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 14px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 29px;
    margin-bottom: 100px;
  }
`;
