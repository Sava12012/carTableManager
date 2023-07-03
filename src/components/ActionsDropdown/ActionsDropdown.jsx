import React, { useState } from "react";
import Modal from "../Modal/Modal";

const ActionsDropdown = ({ onEdit, onDelete }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmAction = () => {
    if (selectedOption === "edit") {
      onEdit();
    } else if (selectedOption === "delete") {
      onDelete();
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="edit">Edit</option>
        <option value="delete">Delete</option>
      </select>
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          action={
            selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)
          }
        />
      )}
    </>
  );
};

export default ActionsDropdown;
