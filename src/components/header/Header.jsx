import  Logo  from "components/logo/Logo";
import UserMenu from "../header/userMenu/UserMenu";
import { Box } from "./Header.styled";

const Header = () => {
    return (
        <Box>
            <Logo />
            <UserMenu />
        </Box>
    )
};

export default Header;