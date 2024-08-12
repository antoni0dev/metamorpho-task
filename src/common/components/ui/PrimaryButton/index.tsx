import { ButtonHTMLAttributes,PropsWithChildren } from 'react';
import { Button, ButtonWrapper } from './PrimaryButton.styled';

export const PrimaryButton = ({
  children,
  ...rest
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ButtonWrapper>
      <Button {...rest}>{children}</Button>
    </ButtonWrapper>
  );
};
