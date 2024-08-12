import { useMutation } from '@tanstack/react-query';
import { withdrawFromVaultService } from '../services/withdrawFromVaultService';
import { ethers } from 'ethers';

export const useWithdrawFromVault = () =>
  useMutation({
    mutationFn: ({
      vaultAddress,
      userAddress,
      userShares
    }: {
      vaultAddress: string;
      userAddress: string;
      userShares: ethers.BigNumber;
    }) => withdrawFromVaultService(vaultAddress, userAddress, userShares)
  });
