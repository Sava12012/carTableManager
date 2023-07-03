import React, { useEffect, useState } from "react";
import {
  CarTableWrapper,
  SearchInput,
  Table,
} from "../CarTable/CarTable.styled";
import ActionsDropdown from "../ActionsDropdown/ActionsDropdown";

const CarTable = () => {
  const [fetchCars, setFetchCars] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://myfakeapi.com/api/cars/");
        const data = await response.json();
        console.log(data.cars, "data");
        setFetchCars(data.cars);
      } catch (error) {
        console.log("Error fetching car data:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleEdit = (id) => {
    console.log("Edit record:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete record:", id);
  };

  return (
    <CarTableWrapper>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
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
          {filterFetchCars().map((car) => (
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
                  onEdit={() => handleEdit(car.id)}
                  onDelete={() => handleDelete(car.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CarTableWrapper>
  );
};

export default CarTable;
