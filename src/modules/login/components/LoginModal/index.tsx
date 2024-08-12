import { Modal } from '@/common/components/ui/Modal';
import {
  Description,
  StyledConnectWalletButtonContainer,
  Title,
  Wrapper
} from './LoginModal.styled';
import './dynamicLoginWidget.css';
import { Logo } from '@/common/components/ui/Logo';
import { useWalletConnectContext } from '@/providers/WalletConnectProvider';
import { LoginButton } from '../LoginButton';
import { useLocation } from 'react-router-dom';
import { useDynamicContext, useSwitchNetwork } from '@dynamic-labs/sdk-react-core';
import { ETHEREUM_MAIN_NETWORK_ID } from '@/providers/AuthProvider/hooks/useIsConnectedToMainnet';

export const LoginModal = () => {
  const { error } = useWalletConnectContext();
  const location = useLocation();
  const { primaryWallet, isAuthenticated } = useDynamicContext();
  const { isConnectedToMainnet } = location.state || {};
  const switchNetwork = useSwitchNetwork();

  const handleSwitchNetwork = () => {
    if (!primaryWallet) return;
    switchNetwork({ wallet: primaryWallet, network: ETHEREUM_MAIN_NETWORK_ID });
  };

  let modalContent;
  let button;

  if (!isAuthenticated) {
    modalContent = (
      <Wrapper>
        <Logo />
        <div>
          <Title>Welcome to Morpho</Title>
          <Description>To get started, please connect your wallet below</Description>
        </div>
      </Wrapper>
    );
    button = <LoginButton>Connect Wallet</LoginButton>;
  } else if (error) {
    modalContent = (
      <Wrapper>
        <img src="/images/warning_icon.png" alt="warning-icon" width={32} height={32} />
        <div>
          <Title>{error}</Title>
          <Description>The login attempt failed.</Description>
        </div>
      </Wrapper>
    );
    button = <LoginButton>Try Again</LoginButton>;
  } else if (!isConnectedToMainnet) {
    modalContent = (
      <Wrapper>
        <img src="/images/warning_icon.png" alt="warning-icon" width={32} height={32} />
        <div>
          <Title>Wrong Network</Title>
          <Description>
            You are not on mainnet. Please click the button below to switch.
          </Description>
        </div>
      </Wrapper>
    );
    button = <LoginButton onClick={handleSwitchNetwork}>Switch</LoginButton>;
  }

  return (
    <Modal isOpen={true} showCloseButton={false}>
      {modalContent}
      <StyledConnectWalletButtonContainer>{button}</StyledConnectWalletButtonContainer>
    </Modal>
  );
};
