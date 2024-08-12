import { ethers, Contract } from 'ethers';
import { contractAbi } from '../constants';

export const withdrawFromVaultService = async (
  vaultAddress: string,
  userAddress: string,
  userShares: ethers.BigNumber
) => {
  if (!window.ethereum) {
    throw new Error('Please install MetaMask and connect your wallet!');
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const vault = new Contract(vaultAddress, contractAbi, signer);

  // Triggering the redeem transaction
  const tx = await vault.redeem(userShares, userAddress, userAddress);

  // Wait for the transaction to be mined
  await tx.wait();

  return tx;
};
