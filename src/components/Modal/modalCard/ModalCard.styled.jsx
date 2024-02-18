import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 541px;
  padding: 50px 40px;
  border-radius: 24px;
  background: var(--primary-white);

  .img-wrapper {
    position: relative;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
    border-radius: 14px;
    overflow: hidden;
  }

  .heart {
    position: absolute;
    top: 14px;
    right: 14px;
    stroke: var(--primary-white);
    transition: fill 350ms, stroke 350ms;
    &:hover,
    &:focus {
      fill: var(--primary-blue);
      stroke: var(--primary-blue);
    }
    &.favored {
      fill: var(--primary-blue);
      stroke: var(--primary-blue);
      &:hover,
      &:focus {
        stroke: var(--primary-white);
      }
    }
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

  .short-info {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
    ul {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      li {
        position: relative;
        padding-right: 6px;
        &:not(:last-child):after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 1px;
          background-color: var(--line-gray);
        }
      }
    }
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
    ul {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      li {
        position: relative;
        padding-right: 6px;
        &:not(:last-child):after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 1px;
          background-color: var(--line-gray);
        }
      }
    }
  }

  .conditions {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 8px;
    li {
      display: flex;
      padding: 7px 14px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 35px;
      background: #f9f9f9;
      span{
        color: var(--primary-blue);
      }
    }
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
    transition: color 350ms, scale 350ms, box-shadow 350ms;
    &:hover,
    &:focus {
      color: var(--primary-blue);
      scale: 0.9;
      box-shadow: var(--btn-box-shadow-hover);
    }
  }
`;
