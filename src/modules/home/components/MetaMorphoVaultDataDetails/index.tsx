import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useFetchMetaMorphoData } from '../../hooks/useFetchMetaMorphoData';
import { extractError } from '@/common/utils/extract-error';
import { Wrapper, ErrorText } from './MetaMorphoVaultDataDetails.styled';
import { PrimaryButton } from '@/common/components/ui/PrimaryButton';
import { useWithdrawFromVault } from '../../hooks/useWithdrawFromVault';

type MetaMorphoVaultDataDisplayProps = {
  vaultAddress: string;
};

export const MetaMorphoVaultDataDetails = ({ vaultAddress }: MetaMorphoVaultDataDisplayProps) => {
  const { primaryWallet } = useDynamicContext();
  const {
    data: vaultData,
    isFetching,
    error
  } = useFetchMetaMorphoData({
    vaultAddress,
    userAddress: primaryWallet?.address || ''
  });

  const {
    mutate: withdraw,
    isPending: isWithdrawing,
    error: withdrawError
  } = useWithdrawFromVault();

  const handleWithdraw = () => {
    if (!primaryWallet || !vaultData?.userMaxRedeem.gt(0)) return;

    withdraw({
      vaultAddress,
      userAddress: primaryWallet.address,
      userShares: vaultData.userMaxRedeem
    });
  };

  if (error) return <ErrorText>{extractError(error)}</ErrorText>;
  if (isFetching) return <Wrapper>Loading...</Wrapper>;
  if (!vaultData) return null;

  return (
    <Wrapper>
      <h2>
        {vaultData.vaultName} ({vaultData.vaultSymbol})
      </h2>
      <p>
        Your Shares: {vaultData.formattedShares} {vaultData.vaultSymbol}
      </p>
      <p>
        Your Assets: {vaultData.formattedAssets} {vaultData.assetSymbol}
      </p>
      <PrimaryButton
        onClick={handleWithdraw}
        disabled={!vaultData.userMaxRedeem.gt(0) || isWithdrawing}>
        {isWithdrawing ? 'Withdrawing...' : 'Withdraw'}
      </PrimaryButton>
      {true && <ErrorText>{extractError(withdrawError)}</ErrorText>}
    </Wrapper>
  );
};
