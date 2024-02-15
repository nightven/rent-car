import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 426px;

  .img-warpper {
    position: relative;
    width: 100%;
    height: 268px;
    margin-bottom: 14px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 14px;
    background: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
      ),
      #f3f3f2;
    box-shadow: var(--btn-box-shadow-hover);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .heart {
    position: absolute;
    fill: white;
    top: 14px;
    right: 14px;
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    padding-right: 9px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-black);
  }

  .model {
    color: #3470ff;
  }
  .verticalLine {
    width: 0.5px;
    height: 16px;
    background-color: var(--line-gray);
  }
  .descr {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 12px;
  }
`;
