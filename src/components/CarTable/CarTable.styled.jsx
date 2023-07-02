import styled from "styled-components";

export const CarTableWrapper = styled.div`
  margin: 20px;
`;

export const SearchInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// export const PaginationWrapper = styled.nav`
//   margin-top: 10px;
// `;

// export const PaginationList = styled.ul`
//   display: flex;
//   list-style-type: none;
//   padding: 0;
//   margin: 0;

//   li {
//     margin-right: 5px;

//     a {
//       display: inline-block;
//       padding: 5px 10px;
//       text-decoration: none;
//       background-color: ${(props) =>
//         props.active ? "#f2f2f2" : "transparent"};

//       &:hover {
//         background-color: #f2f2f2;
//       }
//     }
//   }
// `;
