import React, { useState } from "react";

const ActionsDropdown = ({ onEdit, onDelete }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "edit") {
      onEdit();
    } else if (e.target.value === "delete") {
      onDelete();
    }
  };

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="edit">Edit</option>
      <option value="delete">Delete</option>
    </select>
  );
};

export default ActionsDropdown;
