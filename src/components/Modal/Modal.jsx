import React from "react";
import { useForm } from "react-hook-form";
import { ModalOverlay, ModalContent } from "./Modal.styled";

const Modal = ({
  onClose,
  carData,
  onSave,
  isDeleteModal,
  isEditModal,
  isAddModal,
}) => {
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

  const handlAddFormSubmit = (data) => {
    const updatedCar = {
      ...carData,
      car: data.company,
      car_model: data.model,
      car_model_year: data.year,
      car_vin: data.vin,
      car_color: data.color,
      price: data.price,
      availability: data.availability,
    };

    onSave(updatedCar);
    onClose();
  };

  const handleDeleteBtnClick = () => {
    onSave();
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>
          {isEditModal
            ? "Edit Modal"
            : isDeleteModal
            ? "Delete Modal"
            : isAddModal
            ? "Add Modal"
            : ""}
        </h3>
        {isAddModal && (
          <form onSubmit={handleSubmit(handlAddFormSubmit)}>
            <label>
              Company:
              <input {...register("company")} />
            </label>
            <label>
              Model:
              <input {...register("model")} />
            </label>
            <label>
              VIN:
              <input {...register("vin")} />
            </label>
            <label>
              Year:
              <input {...register("year")} />
            </label>
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
        {!isAddModal && (
          <>
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
          </>
        )}
        {!isAddModal && !isDeleteModal && (
          <button onClick={onClose}>Close</button>
        )}
        {isDeleteModal && (
          <button onClick={handleDeleteBtnClick}>Delete</button>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
