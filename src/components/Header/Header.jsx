import LogoIcon from "../LogoIcon/LogoIcon";
import { HeaderWrapper, CategoryWrapper } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <LogoIcon />
      <CategoryWrapper>
        <div>Category</div>
        <div>About Car</div>
        <div>Contact</div>
      </CategoryWrapper>
    </HeaderWrapper>
  );
}

export default Header;
