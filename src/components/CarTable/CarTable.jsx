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
    const carsData = JSON.parse(localStorage.getItem("cars"));
    if (carsData && carsData.length !== 0) {
      setFetchCars(carsData);
    } else if (!setFetchCars) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://myfakeapi.com/api/cars/");
          const data = await response.json();
          // console.log(data.cars, "data");
          setFetchCars(data.cars);
        } catch (error) {
          console.log("Error fetching car data:", error);
        }
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    // Зберігаємо список автомобілів у локальному сховищі браузера
    localStorage.setItem("cars", JSON.stringify(fetchCars));
  }, [fetchCars]);

  useEffect(() => {
    // Отримуємо список автомобілів з локального сховища браузера при завантаженні сторінки
    // const carsData = localStorage.getItem("cars");
    // if (carsData) {
    //   setFetchCars(JSON.parse(carsData));
    // }
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

  const handleEdit = (car) => {
    const updatedCars = fetchCars.map((auto) => {
      if (auto.id === car.id) {
        auto = { ...auto, ...car };
      }
      return auto;
    });
    setFetchCars(updatedCars);
  };

  const handleDelete = (id) => {
    const updatedCars = fetchCars.filter((car) => car.id !== id);
    setFetchCars(updatedCars);
  };

  // const handleAddModalOpen = () => {
  //   setIsAddModalOpen(true);
  // };

  return (
    <CarTableWrapper>
      {/* <button onClick={handleAddModalOpen}>Add car</button> */}
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
                  car={car}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
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
