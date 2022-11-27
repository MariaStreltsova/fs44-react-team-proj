import { Modal, ModalContent, Button, Svg, P } from './ModalStyled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import Icons from '../../images/icons/sprite.svg';

const ModalClose = ({ active, setActive }) => {
  const dispatch = useDispatch();
  return (
    active && (
      <Modal>
        <ModalContent onClick={e => e.stopPropagation()}>
          <Button onClick={() => setActive(false)}>
            <Svg></Svg>
          </Button>
          <P>Вы действительно хотите выйти?</P>
          <Button
            onClick={() => {
              dispatch(authOperations.logOut());
            }}
          >
            Да
          </Button>
          <Button onClick={() => setActive(false)}>Нет</Button>
        </ModalContent>
      </Modal>
    )
  );
};

export default ModalClose;
