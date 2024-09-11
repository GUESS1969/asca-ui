import { Transaction } from '@emurgo/cardano-serialization-lib-asmjs';
import { useNetwork } from '/hooks/useNetwork'; // Correctly import from hooks

declare global {
  interface Window {
    cardano: any; // To access the wallet extension in the browser
  }
}

// Get the correct wallet extension based on the network
const getWallet = (network: 'mainnet' | 'testnet') => {
  return window.cardano.lace || window.cardano.eternl || (network === 'testnet' ? window.cardano.testwallet : null);
};

// Function to send a transaction
export const sendTransaction = async (transaction: Transaction): Promise<string> => {
  try {
    const { network } = useNetwork(); // Get the selected network
    const wallet = getWallet(network); // Get the appropriate wallet

    if (!wallet) {
      throw new Error('No Cardano wallet found');
    }

    await wallet.enable();
    const txCbor = Buffer.from(transaction.to_bytes()).toString('hex');
    const signedTxCbor = await wallet.signTx(txCbor);
    const txHash = await wallet.submitTx(signedTxCbor);
    return txHash;
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
};

// Function to get the wallet balance
export const getWalletBalance = async (): Promise<number> => {
  try {
    const { network } = useNetwork(); // Get the selected network
    const wallet = getWallet(network); // Get the appropriate wallet

    if (!wallet) {
      throw new Error('No Cardano wallet found');
    }

    await wallet.enable();
    const balance = await wallet.getBalance();
    return parseInt(balance, 10);
  } catch (error) {
    console.error('Error getting wallet balance:', error);
    throw error;
  }
};
