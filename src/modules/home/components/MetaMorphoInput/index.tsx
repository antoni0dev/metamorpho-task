import { ChangeEvent, useEffect, useState } from 'react';
import { useValidateMetaMorphoVault } from '@/modules/home/hooks/useValidateMetaMorphoVault';
import { StyledInput, StyledLabel, ErrorText } from './MetaMorphoInput.styled';

type MetaMorphoVaultInputProps = {
  onValidVault: (address: string) => void;
};

const MetaMorphoVaultInput = ({ onValidVault }: MetaMorphoVaultInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const { error, isValid } = useValidateMetaMorphoVault(inputValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (isValid) {
      onValidVault(inputValue);
    }
  }, [isValid]);

  return (
    <>
      <StyledLabel>MetaMorpho Address</StyledLabel>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter MetaMorpho vault address"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default MetaMorphoVaultInput;
