import useAuth from 'hooks/useAuht';
import exit from 'images/exit.svg';
import { Box } from 'Box';
import { Text, Button, Icon, Decor, Exit } from './UserMenu.styled';
import Modal from '../../Modal/Modal';
import { useState } from 'react';
import LanguageFlags from 'locales/LanguageFlags';

const UserMenu = () => {
  const { user } = useAuth();
  const [modalActive, setModalActive] = useState(false);
  return (
    <Box
      as="div"
      display="flex"
      align-items="center"
      color="secondaryTxtColor"
      fontSize="m"
      lineHeight="normal"
    >
      <LanguageFlags />
      <Text>Hi, {user?.name}</Text>
      <Decor />
      <Button
        type="button"
        onClick={() => {
          setModalActive(true);
        }}
      >
        <Icon src={exit} alt="exit" />
        <Exit>Exit</Exit>
      </Button>
      <Modal active={modalActive} setActive={setModalActive} />
    </Box>
  );
};

export default UserMenu;
