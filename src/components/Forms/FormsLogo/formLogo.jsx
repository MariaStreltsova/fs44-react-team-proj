import { Title, Logo, TitleText } from './formLogo.styles';
import { WalletSvg } from 'images/icons/WalletSvg';

export const FormLogo = ({ mb = 0, w = 40, h = 40 }) => {
  return (
    <Title style={{ marginBottom: `${mb}px` }}>
      <Logo>
        <WalletSvg w={w} h={h} />
      </Logo>
      <TitleText>Wallet</TitleText>
    </Title>
  );
};
