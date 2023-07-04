import React, { useState } from "react";
import Modal from "../Modal/Modal";

const ActionsDropdown = ({ car, onEdit, onDelete }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // const handleOptionChange = (e) => {
  //   setSelectedOption(e.target.value);
  //   if (e.target.value === "edit") {
  //     setIsEditModalOpen(true);
  //   } else if (e.target.value === "delete") {
  //     setIsDeleteModalOpen(true);
  //   }
  // };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmAction = (updatedCar) => {
    console.log(selectedOption);
    if (selectedOption === "edit") {
      onEdit(updatedCar);
    } else if (selectedOption === "delete") {
      onDelete(car.id);
    }

    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setSelectedOption("edit");
            setIsEditModalOpen(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setIsDeleteModalOpen(true);
            setSelectedOption("delete");
          }}
        >
          Delete
        </button>
      </div>
      {isEditModalOpen && (
        <Modal
          onClose={handleEditModalClose}
          carData={{
            id: car.id,
            company: car.car,
            model: car.car_model,
            vin: car.car_vin,
            year: car.car_model_year,
            color: car.car_color,
            price: car.price,
            availability: car.availability,
          }}
          onSave={handleConfirmAction}
          isEditModal
        />
      )}
      {isDeleteModalOpen && (
        <Modal
          onClose={handleDeleteModalClose}
          carData={{
            company: car.car,
            model: car.car_model,
            vin: car.car_vin,
            year: car.car_model_year,
            color: car.car_color,
            price: car.price,
            availability: car.availability,
          }}
          onSave={handleConfirmAction}
          isDeleteModal
        />
      )}
    </>
  );
};

export default ActionsDropdown;
