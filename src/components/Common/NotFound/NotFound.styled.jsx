import styled from "styled-components";
import Oops from "/oops.jpg";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  margin-top: 40px;
  height: 175px;
  padding-top: 2px;

  border-radius: 14px;
  background-image: url(${Oops});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    height: 350px;
    gap: 20px;
    padding-top: 18px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 30px;
    gap: 40px;
    height: 610px;
    padding-top: 34px;
  }
  p {
    color: var(--primary-white);
    font-size: 16px;
    font-weight: 500;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      font-weight: 500;
    }
    @media screen and (min-width: 1440px) {
      font-size: 44px;
      font-weight: 600;
    }
  }
`;
