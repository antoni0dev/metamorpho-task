import { useState } from 'react';
import MetaMorphoVaultInput from '../MetaMorphoInput';
import {
  AddressInputWrapper,
  Card,
  ContentWrapper,
  Description,
  ErrorText,
  ErrorTitle,
  PageContainer,
  StyledPrimaryButton,
  SuccessTitle,
  TightColumn,
  Title
} from './Home.styled';
import { MetaMorphoVaultDataDetails } from '../MetaMorphoVaultDataDetails';
import { useFetchMetaMorphoData } from '../../hooks/useFetchMetaMorphoData';
import { useWithdrawFromVault } from '../../hooks/useWithdrawFromVault';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { extractError } from '@/common/utils/extract-error';
import { PrimaryButton } from '@/common/components/ui/PrimaryButton';
import { Header } from '../Header';

export const Home = () => {
  const [vaultAddress, setVaultAddress] = useState('');
  const { primaryWallet } = useDynamicContext();

  const { data: vaultData, resetQuery } = useFetchMetaMorphoData({
    vaultAddress,
    userAddress: primaryWallet?.address || ''
  });

  const {
    mutate: withdraw,
    isPending: isWithdrawing,
    error: withdrawError,
    isSuccess: isWithdrawSuccess
  } = useWithdrawFromVault();

  const handleInvalidInput = () => {
    setVaultAddress('');
    resetQuery();
  };

  const handleWithdraw = () => {
    if (!primaryWallet || !isFundsToWithdraw) return;

    withdraw({
      vaultAddress,
      userAddress: primaryWallet.address,
      userShares: vaultData!.userMaxRedeem
    });
  };

  const isFundsToWithdraw = vaultData?.userMaxRedeem.gt(0);
  let content;

  if (isWithdrawing) {
    content = (
      <Card>
        <Title>Your transaction is pending...</Title>
        <Description>
          View on <a href="#">Etherscan...</a>
        </Description>
        <StyledPrimaryButton disabled={true}>Withdraw</StyledPrimaryButton>
      </Card>
    );
  } else if (isWithdrawSuccess) {
    content = (
      <Card>
        <img src="/images/check.png" alt="green check icon" width={48} height={48} />
        <TightColumn>
          <SuccessTitle>Success!</SuccessTitle>
          <Description>View on Etherscan...</Description>
        </TightColumn>
        <PrimaryButton onClick={resetQuery}>Reset</PrimaryButton>
      </Card>
    );
  } else if (withdrawError) {
    content = (
      <Card>
        <img src="/images/warning_icon.png" alt="red error icon" width={48} height={48} />
        <TightColumn>
          <ErrorTitle>Oh no!</ErrorTitle>
          <Description>Please try again.</Description>
        </TightColumn>
        <PrimaryButton onClick={handleWithdraw}>Retry</PrimaryButton>
      </Card>
    );
  } else {
    content = (
      <>
        <AddressInputWrapper>
          <MetaMorphoVaultInput
            onInvalidInput={handleInvalidInput}
            onValidVaultInput={(vaultAddress) => setVaultAddress(vaultAddress)}
          />
        </AddressInputWrapper>
        <MetaMorphoVaultDataDetails vaultAddress={vaultAddress} />
        <>
          <StyledPrimaryButton
            onClick={handleWithdraw}
            disabled={!isFundsToWithdraw || !primaryWallet}>
            Withdraw
          </StyledPrimaryButton>
          {withdrawError && <ErrorText>{extractError(withdrawError)}</ErrorText>}
        </>
      </>
    );
  }

  return (
    <PageContainer>
      <Header />
      <ContentWrapper>{content}</ContentWrapper>
    </PageContainer>
  );
};
