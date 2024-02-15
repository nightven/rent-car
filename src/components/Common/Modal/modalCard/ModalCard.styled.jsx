import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 541px;
  height: 752px;
  padding: 50px 40px;
  border-radius: 24px;
  background: var(--primary-white);

  .img-wrapper {
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
    border-radius: 14px;
    overflow: hidden;
  }

  h2 {
    margin-bottom: 8px;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: var(--primary-black);
  }
  .model {
    color: var(--primary-blue);
  }
  .verticalLine {
    width: 0.5px;
    height: 16px;
    background-color: var(--line-gray);
  }

  .short-info {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
  }

  .descriptions {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
    color: var(--primary-black);
  }
  h3 {
    margin-bottom: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: var(--primary-black);
  }
  .accessories {
    margin-bottom: 24px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .conditions {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .rent {
    display: flex;
    width: 168px;
    height: 44px;
    margin: 0 auto;
    padding: 12px 50px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    color: var(--primary-white);
    background: var(--header-gradient);
    box-shadow: var(--btn-box-shadow);
    &:hover,
    &:focus {
      color: var(--primary-blue);
      scale: 0.9;
      box-shadow: var(--btn-box-shadow-hover);
    }
  }

 
`;
