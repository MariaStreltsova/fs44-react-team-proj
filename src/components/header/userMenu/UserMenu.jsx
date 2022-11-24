import useAuth from 'hooks/useAuht';
import exit from 'images/exit.svg';
import { Box } from 'Box';
import { Text, Button, Icon, Decor, Exit } from './UserMenu.styled';

const UserMenu = ({ Modal }) => {
  const { user } = useAuth();
  return (
    <Box
      as="div"
      display="flex"
      align-items="center"
      color="secondaryTxtColor"
      fontSize="m"
      lineHeight="normal"
    >
      <Text>
        name
        {user?.name}
      </Text>
      <Decor />
      <Button
        type="button"
        onClick={() => {
          Modal();
        }}
      >
        <Icon src={exit} alt="exit" />
        <Exit>Exit</Exit>
      </Button>
    </Box>
  );
};

export default UserMenu;
