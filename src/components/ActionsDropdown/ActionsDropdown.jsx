import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ActionsDropdown = ({ car, onEdit, onDelete }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmAction = (updatedCar) => {
    if (selectedOption === "edit") {
      onEdit(updatedCar);
    } else if (selectedOption === "delete") {
      onDelete(car.id);
    }

    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="actions-dropdown-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        Options
      </Button>
      <Menu
        id="actions-dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => {
            setSelectedOption("edit");
            setIsEditModalOpen(true);
            handleMenuClose();
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedOption("delete");
            setIsDeleteModalOpen(true);
            handleMenuClose();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
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
