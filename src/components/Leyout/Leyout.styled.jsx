import styled from "styled-components";

export const LayoutWrapper = styled.div`
  margin: 20px;
  position: relative;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 776px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 30px;

  .active {
    color: black;
    font-weight: bold;
  }
`;
