// Button.js
import React from "react";
import { Btn } from "./Button.styled";

const CustomButton = ({ onClick, children }) => {
  return (
    <div>
      <Btn onClick={onClick}>{children}</Btn>
    </div>
  );
};

export default CustomButton;
