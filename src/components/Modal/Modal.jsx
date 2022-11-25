import { Modal, ModalContent, Button, Svg} from './ModalStyled'
import Icons from '../../images/icons/sprite.svg';

const ModalClose = ({active, setActive}) => {
    return (
        <Modal> {active} onClick={() => setActive(false)}
        <ModalContent>{active} onClick={e => e.stopPropagation()}
            
    <Button>      
        <Svg>
            <use href={`${Icons}#icon-close-cross`} />
        </Svg>
    </Button>   
    
            </ModalContent>
        </Modal>
    );
};

export default ModalClose;