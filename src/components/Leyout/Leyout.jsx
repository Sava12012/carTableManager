import { CategoryWrapper, HeaderWrapper, LayoutWrapper } from "./Leyout.styled.jsx";
import { Link, Outlet, NavLink } from "react-router-dom";
import LogoIcon from "../LogoIcon/LogoIcon.jsx";


const Layout = () => {
    return (
        <LayoutWrapper>
            <nav>
                <HeaderWrapper>
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                    <CategoryWrapper>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/carGallerySearch">Gallery</NavLink>
                    </CategoryWrapper>
                </HeaderWrapper>
            </nav>

            <Outlet />
        </LayoutWrapper>
    );
};

export default Layout;
