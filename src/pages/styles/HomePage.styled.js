export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;

  video {
    height: 665px;
    background: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
      ),
      #f3f3f2;
    box-shadow: var(--btn-box-shadow);
    source {
      filter: opacity(67%) contrast(99%)
        drop-shadow(10px 10px 5px rgba(104, 121, 192, 0.82));
      -webkit-filter: opacity(67%) contrast(99%)
        drop-shadow(10px 10px 5px rgba(104, 121, 192, 0.82));
      -moz-filter: opacity(67%) contrast(99%)
        drop-shadow(10px 10px 5px rgba(104, 121, 192, 0.82));
    }
  }

  h1 {
    position: absolute;
    display: flex;
    flex-direction: column;

    width: 500px;
    top: 200px;
    left: 100px;

    font-size: 70px;
    font-weight: 600;
    font-style: italic;
    line-height: 100px;
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

    /* backdrop-filter: blur(5px); */
    color: var(--primary-white);
    span:nth-child(2) {
      color: var(--primary-blue);
      direction: rtl;
    }
  }
  h2 {
    margin: 0 auto;
    font-size: 48px;
    font-weight: 500;
    line-height: 45px;
    color: var(--primary-black);
  }

  .img-wrapper {
    box-shadow: var(--btn-box-shadow);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  a {
    position: absolute;
    right: 70px;
    top: 558px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 44px;
    font-size: 16px;

    color: var(--primary-white);
    border: 1px solid var(--primary-blue);
    border-radius: 14px;
    box-shadow: var(--btn-box-shadow);
    &:hover,
    &:focus {
      cursor: pointer;
      scale: 0.9;
    }
  }
`;
