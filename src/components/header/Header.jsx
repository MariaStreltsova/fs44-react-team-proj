import Logo from 'components/Logo/Logo';
import UserMenu from '../header/userMenu/UserMenu';
import { Box, Container } from './Header.styled';

const Header = () => {
  return (
    <Box>
      <Container>
        <Logo />
        <UserMenu />
      </Container>
    </Box>
  );
};

export default Header;
