

import Header from "../Header/Header.jsx";
import { LayoutWrapper } from "./Leyout.styled.jsx";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <LayoutWrapper>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/carGallerySearch">Car Gallery</Link>
            </nav>
            <Header />
            <Outlet /> {/* Виводимо вкладені роути тут */}
        </LayoutWrapper>
    );
};

export default Layout;
