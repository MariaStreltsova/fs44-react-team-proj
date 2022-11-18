import React from 'react';
import axios from 'axios';

// import setState

function Currency() {
  // const [currencyData, setCurrencyData] = setState({})

  async function fetchCurrency() {
    const currencyData = await axios.get('https://api.themoviedb.org/3/');
    console.log(currencyData);
  }

  fetchCurrency();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {/* {transactions.map(transaction => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))} */}
        </tbody>
      </table>
      <button onClick={fetchCurrency}>Request</button>
    </>
  );
}

export default Currency;
