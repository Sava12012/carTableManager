import styled from "styled-components";

export const CarTableWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 20px;
  gap: 60px;
`;

export const SearchInput = styled.input`
  padding: 0.8em 6em;
  border: none;
  outline: none;
  color: #ffffff;
  background: #111;

  border-radius: 10px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    border: 1px solid #ff0000;
  }

  &:focus {
    border: 2px solid #680101;
    box-shadow: 0 0 0 2px rgba(238, 44, 44, 0.25);
  }
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #009879;
    color: #fff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
  /* th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  } */
`;
