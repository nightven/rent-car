import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 18px;
    margin-bottom: 50px;
  }
`;
