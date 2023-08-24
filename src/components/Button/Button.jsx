// Button.js
import React from "react";
import { Btn } from "./Button.styled";

const CustomButton = ({ onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>Add car</Btn>
    </div>
  );
};

export default CustomButton;
