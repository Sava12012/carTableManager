import styled from "styled-components";

export const CarTableWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const SearchInput = styled.input`
  padding: 14px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  background: #111;

  border-radius: 10px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    border: 1px solid #8383ff;
    box-shadow: 0 0 0 2px #8383ff;
  }

  &:hover {
    border-color: #8383ff;
  }

  @media (min-width: 776px) {
    width: 320px;
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
    background-color: #8383ff;
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
`;
