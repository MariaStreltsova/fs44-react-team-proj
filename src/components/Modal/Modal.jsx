import './Modal.css'
import Icons from '../../images/icons/sprite.svg';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active": "modal__content"} onClick={e => e.stopPropagation()}>
                
<div className='modal__box'>
    <button className='modal__close__button'>      
        <svg className='modal__close__svg'>
            <use href={`${Icons}#icon-close-cross`} />
        </svg>
    </button>   
    <p>Вы точно хотите выйти?</p>

                <button>Да</button>
                <button>Нет</button>
            </div>
            </div>
            </div>
    );
};

export default Modal;