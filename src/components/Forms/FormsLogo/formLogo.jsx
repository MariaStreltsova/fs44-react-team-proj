import { Title, Logo, TitleText, MyLogo } from './formLogo.styles';
import LogoPNG from 'images/LogoPNG.png';

export const FormLogo = () => {
  return (
    <Title >
      <Logo link={"/fs44-react-team-proj/home"}>
          {/* <WalletSvg w={w} h={h} /> */}
          <MyLogo src={LogoPNG} />
      </Logo>
      <TitleText>Wallet</TitleText>
    </Title>
  );
};
