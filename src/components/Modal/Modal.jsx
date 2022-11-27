import { Modal, ModalContent, ButtonClose, ButtonYes, ButtonNo, Svg, P } from './ModalStyled';

const ModalClose = ({ active, setActive }) => {
  return active && (
    <Modal>
      <ModalContent onClick={ e => e.stopPropagation() }>

        <ButtonClose onClick={() => setActive(false)
      }>
          <Svg>
      
            </Svg>

        </ButtonClose>
        <P>Вы действительно хотите выйти?
        <ButtonYes onClick={ () => { localStorage.removeItem('token')}}>Да</ButtonYes>
        <ButtonNo onClick={ () => setActive(false)  }>Нет</ButtonNo>
        </P>    
      </ModalContent>
    </Modal>
  );
};

export default ModalClose;