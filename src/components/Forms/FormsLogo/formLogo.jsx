import { Title, Logo, TitleText } from './formLogo.styles';
import { WalletSvg } from 'images/icons/WalletSvg';

export const FormLogo = () => {
  return (
    <Title>
      <Logo>
        <WalletSvg />
      </Logo>
      <TitleText>Wallet</TitleText>
    </Title>
  );
};
