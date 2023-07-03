import React from "react";
import { ModalOverlay, ModalContent } from "../Modal/Modal.styled";

const Modal = ({ onClose, action }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h3>{action} Modal</h3>
        <p>App</p>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
