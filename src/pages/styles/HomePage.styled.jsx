import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;

  video {
    height: 210px;
    box-shadow: var(--btn-box-shadow);

    @media screen and (min-width: 768px) {
      height: 400px;
    }

    @media screen and (min-width: 1440px) {
      height: 665px;
    }
  }

  h1 {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 20px;

    font-size: 34px;
    font-weight: 600;
    font-style: italic;
    line-height: 40px;
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

    @media screen and (min-width: 768px) {
      width: 500px;
      top: 75px;
      left: 20px;
      font-size: 70px;
      line-height: 100px;
    }
    @media screen and (min-width: 1440px) {
      top: 200px;
      left: 100px;
    }
    color: var(--primary-white);
    span:nth-child(2) {
      color: var(--primary-blue);
      direction: rtl;
    }
  }
  h2 {
    margin: 0 auto;
    font-size: 30px;
    font-weight: 500;
    line-height: 45px;
    text-align: center;
    color: var(--primary-blue);
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 48px;
    }
  }

  .img-wrapper {
    box-shadow: var(--btn-box-shadow);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  a {
    position: absolute;
    top: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 34px;
    font-size: 14px;

    color: var(--primary-white);
    border: 1px solid var(--primary-blue);
    border-radius: 14px;
    box-shadow: var(--btn-box-shadow);

    @media screen and (min-width: 768px) {
      width: 150px;
      height: 44px;
      right: 50px;
      top: 318px;
      font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
      right: 70px;
      top: 558px;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      scale: 0.9;
    }
  }
  .features {
    background: linear-gradient(to right, #4d7fff, #4da6ff);
    width: 100%;
    color: white;
    padding: 12px;

    box-shadow: var(--btn-box-shadow);

    .features-title {
      font-size: 20px;
      margin-bottom: 14px;
      color: var(--primary-white);
    }
    .features-list {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 12px;
      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
      }
      @media screen and (min-width: 1440px) {
        grid-template-columns: repeat(5, 1fr);
      }
      li {
        font-size: 14px;
        letter-spacing: 1.12;
      }
    }
  }
`;
