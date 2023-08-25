import styled from "styled-components";


export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageList = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 776px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    transform: scale(1.08);
  }
`;


