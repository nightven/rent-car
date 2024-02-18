import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid var(--primary-blue);
  border-radius: 14px;

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
    padding: 10px 260px;
  }
  label {
    position: relative;
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 14px;
    background: #f7f7fb;
    @media screen and (min-width: 768px) {
      width: 224px;
      height: 48px;
      &:not(:first-child) {
        width: 125px;
      }
    }
    @media screen and (min-width: 1440px) {
    }
  }
  
  
`;
