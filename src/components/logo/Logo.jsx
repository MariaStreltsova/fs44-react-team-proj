import React from 'react';
import { Box } from 'Box';
import { Title } from './Logo.styled';
import wallet from '../../images/wallet.svg';

const Logo = () => {
    return (
        <Box display="flex">
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