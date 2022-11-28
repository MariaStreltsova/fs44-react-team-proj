import {
  Modal,
  ModalContent,
  ButtonClose,
  ButtonYes,
  ButtonNo,
  Svg,
  P,
} from './ModalStyled';
import Icons from '../../images/icons/sprite.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useTranslation } from 'react-i18next';

const ModalClose = ({ active, setActive }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeydownEsc = event => {
      if (event.keyCode === 27) {
        setActive(false);
      }
    };
    if (active) {
      window.addEventListener('keydown', onKeydownEsc);
    }

    return () => {
    window.removeEventListener('keydown', onKeydownEsc);
    };
  },  [active, setActive]);

  return (
    <Modal className={active && 'active'}>
      <ModalContent>
        <ButtonClose onClick={() => setActive(false)}>
          <Svg>
            <use href={`${Icons}#icon-close-cross`} />
          </Svg>
        </ButtonClose>
        <P>{t('modal-close.title.p')} 
          <ButtonYes
            onClick={() => {
              dispatch(authOperations.logOut());
            }}
          >
            {t('modal-close.button.button-yes')}
          </ButtonYes>
          <ButtonNo onClick={() => setActive(false)}>
            {t('modal-close.button.button-no')}
          </ButtonNo>
        </P>
      </ModalContent>
      
    </Modal>
  );
};

export default ModalClose;
