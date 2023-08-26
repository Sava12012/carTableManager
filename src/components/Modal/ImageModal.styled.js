import styled from 'styled-components';
import { Modal } from "@mui/material";

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;


  .modal-content {
    position: relative;
    box-shadow: 1px 3px 44px 17px rgba(0,0,0,0.66);
    max-width: 90%;
    max-height: 90%;
    animation: modalFadeIn 0.5s ease-in-out;
    overflow: hidden;
  }

  .close-button {
    position: absolute;
    fill: black;
    top: 8px;
    right: 8px;
    color: #9e9e9e;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    padding: 8px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .close-button:hover {
    transform: scale(1.1);
    opacity: 0.8;
    fill: #8383ff;
  }

  .modal-image {
    max-width: 100%;
    max-height: 100vh;
    object-fit: contain;
  }

  @keyframes modalFadeIn {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
