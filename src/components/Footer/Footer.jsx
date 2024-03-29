import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin: 20px 0 20px 0;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }

  p {
    color: var(--primary-black);
    font-size: 24px;
  }
  a {
    color: var(--primary-blue);
    font-size: 24px;
    font-weight: 500;
    transition: background 250ms, text-shadow 350ms, color 350ms;
    &:hover,
    &:focus {
      cursor: pointer;
      color: #ffffff;
      background: #ffffff;
      text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
        -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
        -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
    }
  }
`;

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <StyledDiv>
          <p>Copyright &copy; Created by </p> <a href="mailto:vitaliy.beyar@gmail.com">Vitalii Beiar</a>
        </StyledDiv>
      </div>
    </footer>
  );
};

export default Footer;
