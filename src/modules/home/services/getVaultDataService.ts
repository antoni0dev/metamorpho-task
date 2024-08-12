import { ethers, Contract } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { contractAbi, erc20Abi } from '../constants';

type VaultData = {
  vaultName: string;
  vaultSymbol: string;
  vaultDecimals: number;
  assetSymbol: string;
  assetDecimals: number;
  formattedShares: string;
  formattedAssets: string;
  userMaxRedeem: ethers.BigNumber;
  userMaxWithdraw: ethers.BigNumber;
};

export const getVaultDataService = async (
  vaultAddress: string,
  userAddress: string
): Promise<VaultData> => {
  if (!window.ethereum) {
    throw new Error('Please install MetaMask and connect your wallet!');
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const vault = new Contract(vaultAddress, contractAbi, provider);

  const [vaultName, vaultSymbol, vaultDecimals] = await Promise.all([
    vault.name(),
    vault.symbol(),
    vault.decimals()
  ]);

  const assetAddress = await vault.asset();
  const asset = new Contract(assetAddress, erc20Abi, provider);

  const [assetSymbol, assetDecimals] = await Promise.all([asset.symbol(), asset.decimals()]);

  const userShares = await vault.balanceOf(userAddress);
  const userAssets = await vault.convertToAssets(userShares);

  const userMaxRedeem = await vault.maxRedeem(userAddress);
  const userMaxWithdraw = await vault.convertToAssets(userMaxRedeem);

  return {
    vaultName,
    vaultSymbol,
    vaultDecimals,
    assetSymbol,
    assetDecimals,
    formattedShares: parseFloat(formatUnits(userShares, vaultDecimals)).toFixed(2),
    formattedAssets: parseFloat(formatUnits(userAssets, assetDecimals)).toFixed(2),
    userMaxRedeem,
    userMaxWithdraw
  };
};
