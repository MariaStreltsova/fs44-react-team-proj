import { FormLogo } from '../Forms/FormsLogo/formLogo';
import UserMenu from '../header/userMenu/UserMenu';
import { Box, Container, Link } from './Header.styled';

const Header = () => {
  return (
    <Box>
      <Container>
        <Link to="/home">
          {' '}
          <FormLogo />
        </Link>

        <UserMenu />
      </Container>
    </Box>
  );
};

export default Header;
