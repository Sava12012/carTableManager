import React from "react";
import Header from "../Header/Header";
import { LayoutWrapper } from "./Leyout.styled";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
