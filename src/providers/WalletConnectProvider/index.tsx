import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config';
import { ReactNode, useState } from 'react';
import { extractError } from '@/common/utils/extract-error';
import { createContext, useContext } from 'react';

type WalletConnectContextType = {
  error: string;
};

export const WalletConnectContext = createContext<WalletConnectContextType>(null!);
const queryClient = new QueryClient();

type WalletConnectProviderProps = {
  children?: ReactNode;
};

export const WalletConnectProvider = ({ children }: WalletConnectProviderProps) => {
  const [error, setError] = useState('');

  return (
    <DynamicContextProvider
      settings={{
        environmentId: import.meta.env.VITE_DYNAMIC_ENV_ID,
        walletConnectors: [EthereumWalletConnectors],
        events: {
          onAuthFailure: (_, error) => setError(extractError(error))
        }
      }}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <WalletConnectContext.Provider value={{ error }}>
            <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
          </WalletConnectContext.Provider>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};

export const useWalletConnectContext = () => {
  const context = useContext(WalletConnectContext);
  if (!context) {
    throw new Error('useWalletConnectContext must be used within a WalletConnectProvider');
  }
  return context;
};
