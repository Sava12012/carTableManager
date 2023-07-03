import React, { useState } from "react";
import { ModalOverlay, ModalContent } from "../Modal/Modal.styled";

const Modal = ({ onClose, carData }) => {
  const [color, setColor] = useState(carData.color);
  const [price, setPrice] = useState(carData.price);
  const [availability, setAvailability] = useState(carData.availability);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  const handleSave = () => {
    const updatedCar = {
      ...carData,
      car_color: color,
      price: price,
      availability: availability,
    };
    // Виконайте потрібні дії з оновленими даними автомобіля

    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Edit Modal</h3>
        <p>Company: {carData.company}</p>
        <p>Model: {carData.model}</p>
        <p>VIN: {carData.vin}</p>
        <p>Year: {carData.year}</p>
        <label>
          Color:
          <input type="text" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
        <label>
          Availability:
          <input
            type="text"
            value={availability}
            onChange={handleAvailabilityChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
