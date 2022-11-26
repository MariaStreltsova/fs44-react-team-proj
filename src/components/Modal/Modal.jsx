import { Modal, ModalContent, Button, Svg, P  } from './ModalStyled';
// import Icons from '../../images/icons/sprite.svg';

const ModalClose = ({ active, setActive }) => {
  return active && (
    <Modal>
      <ModalContent onClick={ e => e.stopPropagation() }>

        <Button onClick={ () => setActive(false)  }>
          <Svg>
            
          </Svg>
        </Button>
        <P>Вы действительно хотите выйти?</P>
        <Button onClick={ () => { localStorage.removeItem('token')}}>Да</Button>
        <Button onClick={ () => setActive(false)  }>Нет</Button>

      </ModalContent>
    </Modal>
  );
};


export default ModalClose;