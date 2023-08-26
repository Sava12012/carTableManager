import styled from "styled-components";
import { ImageListItem } from "@mui/material";

export const StyledImageListItem = styled(ImageListItem)`
  padding: 6px;
  background-color: #8383ff;
  border-radius: 10px;
`;


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
  border-radius: 10px;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    transform: scale(1.08);
  }
`;




