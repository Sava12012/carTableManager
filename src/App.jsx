import React from "react";
import Layout from "./components/Leyout/Leyout";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import CarTable from "./components/CarTable/CarTable";

function App() {
  return (
    <Layout>
      <ProductTitle />
      <CarTable />
    </Layout>
  );
}

export default App;
