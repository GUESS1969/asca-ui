import React from 'react';
import { useUserContext } from '../context/UserContext';
import useCompliance from '../hooks/useCompliance';

const CompliancePage: React.FC = () => {
  const { userAddress } = useUserContext(); // Access userAddress from context
  const { complianceStatus } = useCompliance(userAddress || ''); // Fallback if userAddress is null

  if (!userAddress) {
    return <p>Please connect your wallet to view your compliance status.</p>;
  }

  return (
    <div>
      <h1>Compliance Status</h1>
      <p>Your compliance status is: {complianceStatus ? 'Compliant' : 'Non-Compliant'}</p>
    </div>
  );
};

export default CompliancePage;
