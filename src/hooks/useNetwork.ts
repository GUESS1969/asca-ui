import { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext'; // Correct import path

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};
