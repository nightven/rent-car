import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  .modal {
    position: relative;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    transition: rotate 350ms;
    &:hover,
    &:focus {
      rotate: 120deg;
    }
  }
  .modal-content {
    overflow-y: auto; 
    max-height: calc(
      100vh - 48px
    ); 
  
  }
`;
