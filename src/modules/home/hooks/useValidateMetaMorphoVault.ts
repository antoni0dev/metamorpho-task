import { useState, useEffect } from 'react';
import { ethers, Contract } from 'ethers';
import { useDebounce } from '@/common/hooks/useDebounce';
import { INPUT_DEBOUNCE_DELAY, mmFactoryAbi, mmFactoryAddress } from '../constants';

export const useValidateMetaMorphoVault = (inputValue: string) => {
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const debouncedInputValue = useDebounce(inputValue, INPUT_DEBOUNCE_DELAY);

  useEffect(() => {
    if (!debouncedInputValue) {
      setError('');
      setIsValid(false);
      return;
    }

    const validateVaultAddress = async () => {
      if (!ethers.utils.isAddress(debouncedInputValue)) {
        setError('Invalid Ethereum address');
        return;
      }

      try {
        if (!window.ethereum) {
          setError('Please install MetaMask and connect your wallet!');
          return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const mmFactory = new Contract(mmFactoryAddress, mmFactoryAbi, provider);

        const isMetaMorpho = await mmFactory.isMetaMorpho(debouncedInputValue);

        if (!isMetaMorpho) {
          setError('Invalid MetaMorpho vault address');
        } else {
          setError('');
          setIsValid(true);
        }
      } catch (rpcError) {
        setError('Failed to validate address, please try again.');
      }
    };

    if (debouncedInputValue) {
      validateVaultAddress();
    }
  }, [debouncedInputValue]);

  return { error, isValid };
};

export default useValidateMetaMorphoVault;
