import React from 'react';
import { LetsStart } from './LetsStart/LetsStart';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React team Project
      <>
      <h1>Hello</h1>
      <LetsStart />
    </>
    </div>
  );
};
