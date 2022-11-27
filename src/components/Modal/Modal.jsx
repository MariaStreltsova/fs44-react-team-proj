import { Modal, ModalContent, ButtonClose, ButtonYes, ButtonNo, Svg, P } from './ModalStyled';
import Icons from '../../images/icons/sprite.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const ModalClose = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const onKeydownEsc = (event) => {
    if (event.keyCode === 27) {
      setActive(false)
    }
  }

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', onKeydownEsc);
    }

    return () => {
      window.removeEventListener('keydown', onKeydownEsc)
    }
  }, [active, onKeydownEsc]);

  return (
    <Modal className={active && "active"}>
      <ModalContent>
        <ButtonClose onClick={ () => setActive(false)  }>
          <Svg>
            <use href={ `${ Icons }#icon-close-cross` } />
          </Svg>
        </ButtonClose>
        <P>Вы действительно хотите выйти?
        <ButtonYes onClick={() => { dispatch(authOperations.logOut()); }}>Да</ButtonYes>
        
        <ButtonNo onClick={ () => setActive(false)  }>Нет</ButtonNo>
        </P>
      </ModalContent>
    </Modal>
  );
};


export default ModalClose;