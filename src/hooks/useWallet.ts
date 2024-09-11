// src/hooks/useWallet.ts
import { useState, useEffect } from 'react'; // Import useState and useEffect
import WalletService, { WalletAPI } from '../services/blockchain/walletService';

const useWallet = () => {
    const [address, setAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<number | null>(null);
    const [isConnected, setIsConnected] = useState<boolean>(false);

    const loadWalletData = async () => {
        try {
            if (window.lace) {
                const laceAPI: WalletAPI = {
                    getAddress: async () => {
                        const addresses = await window.lace.getUsedAddresses();
                        return addresses[0];
                    },
                    getBalance: async () => {
                        const balance = await window.lace.getBalance();
                        return parseInt(balance, 10);
                    },
                    signTransaction: async (tx: any) => {
                        return await window.lace.signTx(tx);
                    },
                    submitTransaction: async (tx: any) => {
                        return await window.lace.submitTx(tx);
                    }
                };

                const walletService = new WalletService(laceAPI);

                const userAddress = await walletService.getAddress();
                setAddress(userAddress);

                const userBalance = await walletService.getBalance();
                setBalance(userBalance);
                setIsConnected(true);
            } else {
                console.error("Lace Wallet is not available.");
            }
        } catch (error) {
            console.error('Failed to load wallet data:', error);
        }
    };

    useEffect(() => {
        loadWalletData();
    }, []);

    return { address, balance, isConnected, connectWallet: loadWalletData, disconnect: () => setIsConnected(false) };
};

export default useWallet;
