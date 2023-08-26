import styled from "styled-components";

export const CarTableWrapper = styled.div`
margin-top: 30px`;

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
    width: 460px;
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
  border-radius: 10px;

  thead tr {
    background-color: #8383ff;
    color: #fff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
    &:first-child {
      border-top-left-radius: 10px; /* Заокруглюємо лівий край першого стовпця */
      border-bottom-left-radius: 10px; /* Заокруглюємо лівий край першого стовпця */
    }
    &:last-child {
      border-top-right-radius: 10px; /* Заокруглюємо правий край останнього стовпця */
      border-bottom-right-radius: 10px; /* Заокруглюємо правий край останнього стовпця */
    }
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;
export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 10px;
`;
