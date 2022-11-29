import React from 'react';
import {
  DataTable,
  HeadTable,
  HeadCell,
  CurrencyBlock,
  BodyCell,
} from './Currency.styled';
import { useState, useEffect } from 'react';
import CurrencyLoader from 'UI/loaders/CurrencyLoader';
import fetchCurrency from 'api/currency';

function Currency() {
  const [currencyData, setCurrencyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // getting data
  async function readLocalStorage() {
    const data = JSON.parse(localStorage.getItem('currencyData'));
    if (data && data.length === 3) {
      setTimeout(() => {
        setCurrencyData(data);
      }, 1000);
    } else {
      const interval = setInterval(() => {
        fetchCurrency();
        const data = JSON.parse(localStorage.getItem('currencyData'));
        if (data) {
          clearInterval(interval);
          setCurrencyData(data);
        }
      }, 2000);
    }
  }

  // mount component, checks local storage or fetches data from server
  useEffect(() => {
    readLocalStorage();
    setInterval(() => {
      fetchCurrency();
      const data = JSON.parse(localStorage.getItem('currencyData'));
      setCurrencyData(data);
    }, 3600000);
  }, []);

  // observe change in data state for mountain component
  useEffect(() => {
    if (currencyData.length === 3) {
      setIsLoading(false);
    }
  }, [currencyData]);

  return (
    <CurrencyBlock>
      <HeadTable>
        <tbody>
          <tr>
            <HeadCell>Currency</HeadCell>
            <HeadCell>Purchase</HeadCell>
            <HeadCell>Sale</HeadCell>
          </tr>
        </tbody>
      </HeadTable>
      {isLoading ? (
        <CurrencyLoader />
      ) : (
        <DataTable>
          <tbody>
            <tr>
              <BodyCell>USD</BodyCell>
              <BodyCell>{currencyData[0].rateBuy.toFixed(2)}</BodyCell>
              <BodyCell>{currencyData[0].rateSell.toFixed(2)}</BodyCell>
            </tr>
            <tr>
              <BodyCell>EUR</BodyCell>
              <BodyCell>{currencyData[1].rateBuy.toFixed(2)}</BodyCell>
              <BodyCell>{currencyData[1].rateSell.toFixed(2)}</BodyCell>
            </tr>
            <tr>
              <BodyCell>MXN</BodyCell>
              <BodyCell colSpan="2">
                {currencyData[2].rateCross.toFixed(2)}
              </BodyCell>
            </tr>
          </tbody>
        </DataTable>
      )}
    </CurrencyBlock>
  );
}

export default Currency;
