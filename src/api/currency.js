import axios from 'axios';

const CURRENCY_URL = 'https://api.monobank.ua/bank/currency';

async function fetchCurrency() {
  try {
    const response = await axios.get(CURRENCY_URL);
    const currencyData = response.data.filter(
      item =>
        (item.currencyCodeA === 840 ||
          item.currencyCodeA === 978 ||
          item.currencyCodeA === 484) &
        (item.currencyCodeB !== 840)
    );
    localStorage.setItem('currencyData', JSON.stringify(currencyData));
  } catch (error) {}
}
export default fetchCurrency;
