# MetaMorpho Vault Interface - Case Study

## Overview

This project is a case study involving the integration and interaction with MetaMorpho vaults using Ethereum smart contracts. The goal is to create a simple web interface that allows users to connect their wallet, validate MetaMorpho vault addresses, fetch relevant vault data, and withdraw their assets.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Development Environment Setup](#development-environment-setup)
5. [Technical Details](#technical-details)
6. [Dependencies](#dependencies)
7. [License](#license)

## Installation

To get started, clone this repository and install the dependencies:

```bash
git clone git@github.com:antoni0dev/metamorpho-task.git
cd metamorpho-task
npm install
```

## Usage

To run the application locally:

```bash
npm run dev
```

This will start the development server, and the application will be available at `http://localhost:5173`.

## Features

### 1. **User Wallet Connection**

- **States Managed:** Loading, stale, and switch network.
- **Wallet Integration:** Supports web3 wallet connection using `dynamic.xyz` and other Web3 libraries.

### 2. **MetaMorpho Vault Address Input**

- **Validation:** Debounced input that checks the validity of the vault address via the `isMetaMorpho` function from the MetaMorpho factory contract.
- **Error Handling:**
  - `invalidInput`: When the input is not a valid Ethereum address.
  - `rpcError`: When the RPC call fails.
  - `invalidMetaMorpho`: When the address is not recognized as a valid MetaMorpho vault.

### 3. **Fetching Vault Data**

- **Data Fetched:** Vault name, symbol, decimals, user shares, user assets, and the maximum amount that can be redeemed.
- **Efficiency:** Uses `react-query` to handle data fetching, caching, and updating efficiently.

### 4. **Withdraw Functionality**

- **Button State:** Disabled when `userMaxRedeem == 0`.
- **Transaction Handling:** Executes the redeem transaction and handles loading, success, and error states.
- **Error Handling:** Displays appropriate messages for any issues encountered during the transaction.

### 5. **Transaction Lifecycle Management**

- **React Query Mutation:** The `useMutation` hook is used for handling the withdraw action, ensuring smooth UX with proper feedback mechanisms.

## Technical Details

- **React Query:** Used for efficient data fetching and management.
- **Ethers.js:** Used for interacting with Ethereum smart contracts.
- **Dynamic.xyz:** Manages wallet connections.
- **Debounced Validation:** Ensures that the vault address input is validated efficiently.

### Key Files:

- **`MetaMorphoVaultDataDetails.tsx`**: Core component managing vault data display and withdrawal.
- **`useFetchMetaMorphoData.ts`**: Custom hook for fetching vault data.
- **`useWithdrawFromVault.ts`**: Custom hook managing the withdraw transaction.
- **`getVaultDataService.ts`**: Service for fetching vault data from the smart contract.
- **`withdrawFromVaultService.ts`**: Service handling the vault withdrawal transaction.

## Dependencies

- **Vite**
- **React**
- **React Query**
- **Ethers.js**
- **wagmi**
- **Dynamic.xyz**
- **Styled Components** (for UI styling)
