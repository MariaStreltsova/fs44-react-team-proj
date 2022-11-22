import style from './LogoForm.module.css';
import Icons from '../../images/icons/sprite.svg';
import { LogoIconSVG } from './LogoForm.styled';

export default function LogoIcon() {  
  return (
    <LogoIconSVG>
      <svg className={style.logoIcon}>
        <use href={`${Icons}#icon-logo`} />
      </svg>
      <span className={style.logoText}
      style={{ color: "#000"}}
      >{"Wallet"}</span>

    </LogoIconSVG>
  );
}