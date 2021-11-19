import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, largeImage }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function handleKeyDown(e) {
    if (e.code === "Escape") {
      onClose();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) onClose();
  }

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largeImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

export { Modal };
