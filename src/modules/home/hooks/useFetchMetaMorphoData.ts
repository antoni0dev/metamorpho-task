import { useQuery } from '@tanstack/react-query';
import { getVaultDataService } from '../services/getVaultDataService';

export const useFetchMetaMorphoData = ({
  vaultAddress,
  userAddress
}: {
  vaultAddress: string;
  userAddress: string;
}) =>
  useQuery({
    queryKey: ['vaultData'],
    queryFn: () => getVaultDataService(vaultAddress, userAddress),
    enabled: Boolean(vaultAddress) && Boolean(userAddress),
    refetchOnWindowFocus: false
  });
