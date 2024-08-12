import { WalletConnectProvider } from './providers/WalletConnectProvider';
import { AuthProvider } from './providers/AuthProvider';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './globalStyles.ts';

const App = () => {
  return (
    <WalletConnectProvider>
      <AuthProvider>
        <Outlet />
        <GlobalStyles />
      </AuthProvider>
    </WalletConnectProvider>
  );
};

export default App;
