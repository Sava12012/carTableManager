// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Leyout/Leyout.jsx";
import Home from "./page/Home/HomePage.jsx";
import CarGallerySearch from "./page/AboutCar/CarGallerySearch.jsx";
import NotFound from "./components/NonFoundPage/NonFoundPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="carGallerySearch" element={<CarGallerySearch />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
