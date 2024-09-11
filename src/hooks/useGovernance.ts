import { useState, useEffect } from 'react';
import governanceService from '../services/api/governanceService';

const useGovernance = () => {
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const proposals = await governanceService.getProposals();
        setProposals(proposals);
      } catch (error) {
        console.error('Failed to load governance proposals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  return { proposals, loading };
};

export default useGovernance;
