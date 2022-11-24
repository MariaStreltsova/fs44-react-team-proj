
import { FormLogo } from '../Forms/FormsLogo/formLogo';
import UserMenu from '../header/userMenu/UserMenu';
import { Box, Container } from './Header.styled';

const Header = () => {
  return (
    <Box>
      <Container>
        <FormLogo />
        <UserMenu />
      </Container>
    </Box>
  );
};

export default Header;
