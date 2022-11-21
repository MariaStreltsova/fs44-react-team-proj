import React from 'react';
import { DivLoader, ImgLoader } from './CurrencyLoader.styled.js';
import imgLoader from './money-1.1s-200px.png';

function CurrencyLoader() {
  return (
    <DivLoader>
      <ImgLoader src={imgLoader} alt="loader" />
    </DivLoader>
  );
}

export default CurrencyLoader;
