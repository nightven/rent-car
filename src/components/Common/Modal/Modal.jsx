const modalRoot = document.querySelector("#modal-root");
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./Modal.styled";
import Close from "../Icons/Close";

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay className="overlay" onClick={closeModal}>
      <div className="modal">
        <button className="close-btn" onClick={onCloseModal}>
          <Close />
        </button>
        {children}
      </div>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
