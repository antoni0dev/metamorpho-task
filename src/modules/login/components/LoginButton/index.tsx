import { DynamicConnectButton } from '@dynamic-labs/sdk-react-core';
import { ReactNode } from 'react';
import { PrimaryButton } from '@/common/components/ui/PrimaryButton';

type LoginButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
};

export const LoginButton = ({ onClick, children }: LoginButtonProps) => {
  if (onClick) {
    return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
  }

  return (
    <DynamicConnectButton
      buttonContainerClassName="connect-wallet-button-container"
      buttonClassName="connect-wallet-button">
      {children}
    </DynamicConnectButton>
  );
};
