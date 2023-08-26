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
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/carGallerySearch" activeClassName="active">Gallery</NavLink>
                    </CategoryWrapper>
                </HeaderWrapper>

            </nav>

            <Outlet />
        </LayoutWrapper>
    );
};

export default Layout;
