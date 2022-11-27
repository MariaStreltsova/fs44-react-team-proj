import { CurrencyWrapper } from './CurrencyPage.styled';
import Currency from 'components/Currency/Currency';
import { Navigation } from '@mui/icons-material';

export default function CurrencyPage() {
  return (
    <>
      <CurrencyWrapper>
        <Navigation />
        {/* <Balance /> */}
        <Currency />
      </CurrencyWrapper>
    </>
  );
}
