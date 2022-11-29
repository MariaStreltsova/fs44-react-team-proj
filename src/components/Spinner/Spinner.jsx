import CurrencyLoader from 'UI/loaders/CurrencyLoader';
import { Container } from './Spiner.styles';

const Spinner = () => {
  return (
    <Container>
      <CurrencyLoader />
    </Container>
  );
};

export default Spinner;
