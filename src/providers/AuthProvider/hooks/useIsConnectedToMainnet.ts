import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

export const ETHEREUM_MAIN_NETWORK_ID = 1;

export const useIsConnectedToMainnet = () => {
  const { networkConfigurations, network, isAuthenticated } = useDynamicContext();
  const mainChainId = networkConfigurations?.evm?.[0]?.networkId || ETHEREUM_MAIN_NETWORK_ID;
  const isConnectedToMainnet = network !== undefined && network === mainChainId;
  const isEvaluating = isAuthenticated && network === undefined;

  return { isEvaluating, isConnectedToMainnet };
};
