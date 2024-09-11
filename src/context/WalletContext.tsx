// src/context/WalletContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
    walletAddress: string | null;
    walletBalance: number | null;
    setWalletAddress: (address: string | null) => void;
    setWalletBalance: (balance: number | null) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [walletBalance, setWalletBalance] = useState<number | null>(null);

    return (
        <WalletContext.Provider value={{ walletAddress, setWalletAddress, walletBalance, setWalletBalance }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWalletContext must be used within a WalletProvider');
    }
    return context;
};
