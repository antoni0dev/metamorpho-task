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
      <PageContainer>
        <Title>You transaction is pending...</Title>
        <Description>
          View on <a href="#">Etherscane...</a>
        </Description>
      </PageContainer>
    );
  } else if (isWithdrawSuccess) {
    content = (
      <PageContainer>
        <Card>
          <img src="/images/check.png" alt="green check icon" width={48} height={48} />
          <TightColumn>
            <SuccessTitle>Success!</SuccessTitle>
            <Description>View on Etherscan...</Description>
          </TightColumn>
          <PrimaryButton>Reset</PrimaryButton>
        </Card>
      </PageContainer>
    );
  } else if (withdrawError) {
    content = (
      <PageContainer>
        <Card>
          <img src="/images/warning_icon.png" alt="red error icon" width={48} height={48} />
          <TightColumn>
            <ErrorTitle>Oh no!</ErrorTitle>
            <Description>Please try again.</Description>
          </TightColumn>
          <PrimaryButton onClick={() => handleWithdraw}>Retry</PrimaryButton>
        </Card>
      </PageContainer>
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
      </>
    );
  }

  return (
    <PageContainer>
      <Header />
      <ContentWrapper>
        {content}
        {vaultData && (
          <>
            <StyledPrimaryButton
              onClick={handleWithdraw}
              disabled={!isFundsToWithdraw || isWithdrawing || !primaryWallet}>
              {isWithdrawing ? 'Transaction finalizing...' : 'Withdraw'}
            </StyledPrimaryButton>
            {withdrawError && <ErrorText>{extractError(withdrawError)}</ErrorText>}
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};
