import { ethers, Contract } from 'ethers';

export const validateVaultAddress = async (input: string) => {
  if (!ethers.utils.isAddress(input)) {
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
      setError(null);
      onValidVault(debouncedInputValue);
    }
  } catch (error) {
    throw new Error(error);
  }
};
