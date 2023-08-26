import React from "react";
import styled, { keyframes } from "styled-components";
import { Search } from '@mui/icons-material';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledSearchIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${pulseAnimation} 2s infinite; /* Додаємо анімацію */

  svg {
    width: 60%;
    height: 60%;
    fill: #8383ff;
  }
`;

const SearchIcon = () => {
    return (
        <StyledSearchIcon>
            <Search />
        </StyledSearchIcon>
    );
};

export default SearchIcon;
