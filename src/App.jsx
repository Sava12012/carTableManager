import React from "react";
import Layout from "./components/Leyout/Leyout";
import Home from "./page/Home/HomePage.jsx";
import AboutCar from "./page/AboutCar/AboutCar.jsx";


function App() {
  return (
    <Layout>
        {/*<Home />*/}
        <AboutCar />
    </Layout>
  );
}

export default App;
