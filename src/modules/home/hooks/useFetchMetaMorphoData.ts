import { InvalidateQueryFilters, useQuery, useQueryClient } from '@tanstack/react-query';
import { getVaultDataService } from '../services/getVaultDataService';

export const useFetchMetaMorphoData = ({
  vaultAddress,
  userAddress
}: {
  vaultAddress: string;
  userAddress: string;
}) => {
  const queryClient = useQueryClient();

  // To reset the query to its initial state
  const resetQuery = () => {
    queryClient.invalidateQueries(['vaultData'] as InvalidateQueryFilters);
  };

  const query = useQuery({
    queryKey: ['vaultData'],
    queryFn: () => getVaultDataService(vaultAddress, userAddress),
    enabled: Boolean(vaultAddress) && Boolean(userAddress),
    refetchOnWindowFocus: false
  });

  return { ...query, resetQuery };
};
