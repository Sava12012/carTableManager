import React, { useEffect, useState } from "react";
import {
  CarTableWrapper,
  SearchInput,
  Table,
  ButtonWrapper,
} from "../CarTable/CarTable.styled";
import ActionsDropdown from "../ActionsDropdown/ActionsDropdown";
import Modal from "../Modal/Modal";
import Pagination from "@mui/material/Pagination";
import Button from "../Button/Button";

const CarTable = () => {
  const [fetchCars, setFetchCars] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://myfakeapi.com/api/cars/");
        const data = await response.json();
        setFetchCars(data.cars);
      } catch (error) {
        console.log("Error fetching car data:", error);
      }
    };

    const carsData = JSON.parse(localStorage.getItem("cars"));
    if (carsData && carsData.length) {
      setFetchCars(carsData);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (fetchCars.length != 0)
      localStorage.setItem("cars", JSON.stringify(fetchCars));
  }, [fetchCars]);

  const filterFetchCars = () => {
    if (!fetchCars) return [];
    return fetchCars.filter(
      ({ availability, car_model_year, car_vin, id, ...rest }) => {
        for (const key in rest) {
          if (
            rest[key]
              .toString()
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      }
    );
  };

  const handleEdit = (car) => {
    const updatedCars = fetchCars.map((auto) => {
      if (auto.id === car.id) {
        return { ...auto, ...car };
      }
      return auto;
    });
    setFetchCars(updatedCars);
  };

  const handleDelete = (id) => {
    const updatedCars = fetchCars.filter((car) => car.id !== id);
    setFetchCars(updatedCars);
  };

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  const handleAddCar = (car) => {
    const updatedCars = [car, ...fetchCars];
    setFetchCars(updatedCars);
    setIsAddModalOpen(false);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filterFetchCars().slice(indexOfFirstCar, indexOfLastCar);

  return (
    <CarTableWrapper>
      <ButtonWrapper>
        <Button type="submit" onClick={handleAddModalOpen} text="Add car">
          Add Car
        </Button>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </ButtonWrapper>
      <Table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCars.map((car) => (
            <tr key={car.id}>
              <td>{car.car}</td>
              <td>{car.car_model}</td>
              <td>{car.car_vin}</td>
              <td>{car.car_color}</td>
              <td>{car.car_model_year}</td>
              <td>{car.price}</td>
              <td>{car.availability.toString()}</td>
              <td>
                <ActionsDropdown
                  car={car}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isAddModalOpen && (
        <Modal onClose={handleAddModalClose} onSave={handleAddCar} isAddModal />
      )}
      <Pagination
        count={Math.ceil(filterFetchCars().length / carsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        style={{ marginTop: "20px" }}
      />
    </CarTableWrapper>
  );
};

export default CarTable;
