import LogoIcon from "../LogoIcon/LogoIcon";
import { HeaderWrapper, CategoryWrapper } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <LogoIcon />
      <CategoryWrapper>
        <div>Car Gallery</div>
        <div>Contact</div>
      </CategoryWrapper>
    </HeaderWrapper>
  );
}

export default Header;
