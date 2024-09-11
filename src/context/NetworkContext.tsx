// src/context/NetworkContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NetworkProviderProps {
    children: ReactNode;
}

export const NetworkContext = createContext<{
    network: 'mainnet' | 'testnet';
    setNetwork: React.Dispatch<React.SetStateAction<'mainnet' | 'testnet'>>;
} | null>(null);

export const NetworkProvider: React.FC<NetworkProviderProps> = ({ children }) => {
    const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
    return (
        <NetworkContext.Provider value={{ network, setNetwork }}>
            {children}
        </NetworkContext.Provider>
    );
};

export const useNetwork = () => {
    const context = useContext(NetworkContext);
    if (!context) {
        throw new Error('useNetwork must be used within a NetworkProvider');
    }
    return context;
};
