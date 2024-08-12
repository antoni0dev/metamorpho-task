import { ChangeEvent, useEffect, useState } from 'react';
import { useValidateMetaMorphoVault } from '@/modules/home/hooks/useValidateMetaMorphoVault';
import {
  StyledInput,
  StyledLabel,
  ErrorText,
  InputWrapper,
  StatusIcon
} from './MetaMorphoInput.styled';

type MetaMorphoVaultInputProps = {
  onValidVaultInput: (address: string) => void;
  onInvalidInput: () => void;
};

const MetaMorphoVaultInput = ({ onValidVaultInput, onInvalidInput }: MetaMorphoVaultInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const { error, isValid } = useValidateMetaMorphoVault(inputValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (isValid) {
      onValidVaultInput(inputValue);
    } else {
      onInvalidInput();
    }
  }, [isValid]);

  let icon;

  if (isValid) {
    icon = <StatusIcon src="/images/check.png" alt="green check icon" width={16} height={16} />;
  } else if (error) {
    icon = (
      <StatusIcon src="/images/warning_icon.png" alt="red error icon" width={16} height={16} />
    );
  }

  return (
    <div>
      <StyledLabel>MetaMorpho Address</StyledLabel>
      <InputWrapper>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="0xbeef017...12345"
        />
        {icon}
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default MetaMorphoVaultInput;
