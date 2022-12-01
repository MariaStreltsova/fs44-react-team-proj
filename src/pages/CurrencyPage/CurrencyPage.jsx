import { CurrencyWrapper } from './CurrencyPage.styled';
import Currency from 'components/Currency/Currency';
import useSizeScreen from 'hooks/useSizeScreen';

export default function CurrencyPage() {
  const sizeScreen = useSizeScreen();
  return (
    <>
      
       {sizeScreen < 767 && (<CurrencyWrapper><Currency /> </CurrencyWrapper>) }
      
    </>
  );
}
