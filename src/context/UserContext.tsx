// context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  userAddress: string | null;
  setUserAddress: (address: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userAddress, setUserAddress }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
