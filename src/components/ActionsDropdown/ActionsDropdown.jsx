import React, { useState } from "react";
import Modal from "../Modal/Modal";

const ActionsDropdown = ({ car, onEdit, onDelete }) => {
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
      onEdit(car);
    } else if (selectedOption === "delete") {
      onDelete(car.id);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <button value="edit" onClick={handleOptionChange}>
          Edit
        </button>
        <button value="delete" onClick={handleOptionChange}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          carData={{
            company: car.car,
            model: car.car_model,
            vin: car.car_vin,
            year: car.car_model_year,
            color: car.car_color,
            price: car.price,
            availability: car.availability,
          }}
        />
      )}
    </>
  );
};

export default ActionsDropdown;
