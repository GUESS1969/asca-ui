import apiClient from './apiClient';

interface User {
  id: string;
  name: string;
  kycStatus: boolean;
}

export const getUserKYCStatus = async (userId: string): Promise<boolean> => {
  const response = await apiClient.get(`/users/${userId}/kyc-status`);
  return response.data.kycStatus;
};

export const registerUser = async (user: User): Promise<void> => {
  await apiClient.post('/users/register', user);
};
