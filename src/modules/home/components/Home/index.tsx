import { useState } from 'react';
import MetaMorphoVaultInput from '../MetaMorphoInput';
import { AddressInputWrapper, PageContainer } from './Home.styled';
import { MetaMorphoVaultDataDetails } from '../MetaMorphoVaultDataDetails';

export const Home = () => {
  const [vaultAddress, setVaultAddress] = useState('');

  return (
    <PageContainer>
      <AddressInputWrapper>
        <MetaMorphoVaultInput onValidVault={(vaultAddress) => setVaultAddress(vaultAddress)} />
      </AddressInputWrapper>
      <MetaMorphoVaultDataDetails vaultAddress={vaultAddress} />
    </PageContainer>
  );
};
