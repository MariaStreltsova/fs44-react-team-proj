import React from 'react';
import { Box, Title } from './Logo.styled';
import wallet from '../../images/wallet.svg';

const Logo = () => {
    return (
        <Box>
             <img
      src={wallet}
      alt="wallet"
            />
            <Title>
            Wallet
            </Title>
        </Box>
    )
};

export default Logo;