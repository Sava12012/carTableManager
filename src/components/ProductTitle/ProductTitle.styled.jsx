import styled, { keyframes } from "styled-components";

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

export const TitleWrapper = styled.h1`
  display: flex;
  gap: 20px;
  text-shadow: 1px 1px 2px #f6d9d0, 0 0 0.1em #ffe2ec, 0 0 0.2em #dbf5ff;
  
  @media (min-width: 776px) {
    justify-content: center;
    text-align: center;
  }
`;

export const Title1 = styled.span`
  color: black;
`;
export const Title2 = styled.span`
  color: #8383ff;
  animation: ${pulseAnimation} 3s infinite; /* Додаємо анімацію */
`;
export const Title3 = styled.span`
  color: black;
`;
