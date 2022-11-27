import React from 'react';
import zxcvbn from 'zxcvbn';

import { PasswordBarStyle } from './RegistrationForm.styles';
const PasswordStrenghtMeter = ({ password }) => {
  const passwordtest = zxcvbn(password);
  const num = (passwordtest.score * 100) / 4;

  const funcProgressColor = () => {
    switch (passwordtest.score) {
      case 0:
        return '#FF6596';
      case 1:
        return '#FF6596';
      case 2:
        return '#EAC789';
      case 3:
        return '#EAC789';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  };


  const changeStyleProgress = () => ({
    width: '100%',
    height: '5px',
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: '4px',
    background: funcProgressColor(),
    borderRadius: '4px',
  });

  return (
    <>
      <PasswordBarStyle style={changeStyleProgress()}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </PasswordBarStyle>
    </>
  );
};

export default PasswordStrenghtMeter;