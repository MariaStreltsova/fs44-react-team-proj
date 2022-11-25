import { Modal, ModalContent, Button, Svg } from './ModalStyled';
import Icons from '../../images/icons/sprite.svg';

const ModalClose = ({ active, setActive }) => {
  return active && (
    <Modal>
      <ModalContent onClick={ e => e.stopPropagation() }>

        <Button onClick={ () => setActive(false) }>
          <Svg>
            <use href={ `${ Icons }#icon-close-cross` } />
          </Svg>
        </Button>

      </ModalContent>
    </Modal>
  );
};

export default ModalClose;
