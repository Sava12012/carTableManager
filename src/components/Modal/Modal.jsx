import React from "react";
import { useForm } from "react-hook-form";
import { ModalOverlay, ModalContent } from "../Modal/Modal.styled";

const Modal = ({ onClose, carData, onSave, isDeleteModal, isEditModal }) => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    const updatedCar = {
      ...carData,
      car_color: data.color,
      price: data.price,
      availability: data.availability,
    };

    onSave(updatedCar);
    onClose();
  };

  const handleDeleteBtnClik = () => {
    onSave();
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>{isEditModal ? "Edit Modal" : "Delete Modal"}</h3>
        <p>Company: {carData.company}</p>
        <p>Model: {carData.model}</p>
        <p>VIN: {carData.vin}</p>
        <p>Year: {carData.year}</p>
        {isEditModal && (
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>
              Color:
              <input {...register("color")} />
            </label>
            <label>
              Price:
              <input {...register("price")} />
            </label>
            <label>
              Availability:
              <input {...register("availability")} />
            </label>
            <button type="submit">Save</button>
          </form>
        )}
        {isDeleteModal && <button onClick={handleDeleteBtnClik}>Delete</button>}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
