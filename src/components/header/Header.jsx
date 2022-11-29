import { FormLogo } from '../Forms/FormsLogo/formLogo';
import UserMenu from '../header/userMenu/UserMenu';

import { Box, Container, Link, LogoMedia } from './Header.styled';

const Header = () => {
  return (
    <Box>
      <Container>
        <Link to="/home">
          {' '}
          <LogoMedia>
            <FormLogo />
          </LogoMedia>
        </Link>

        <UserMenu />
      </Container>
    </Box>
  );
};

export default Header;
