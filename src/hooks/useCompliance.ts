import { useState, useEffect } from 'react';
import complianceService from '../services/api/complianceService';

const useCompliance = (userAddress: string) => {
  const [complianceStatus, setComplianceStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkCompliance = async () => {
      try {
        const status = await complianceService.verifyCompliance(userAddress);
        setComplianceStatus(status);
      } catch (error) {
        console.error('Failed to verify compliance:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userAddress) {
      checkCompliance();
    }
  }, [userAddress]);

  return { complianceStatus, loading };
};

export default useCompliance;
