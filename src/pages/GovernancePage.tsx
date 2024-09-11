import React from 'react';
import GovernanceVoteForm from '../components/Forms/GovernanceVoteForm';

const GovernancePage: React.FC = () => {
  // Exemples de propositions pour les tests
  const proposals = [
    { id: 1, title: 'Increase Cycle Duration', description: 'Proposal to increase the cycle duration to 10 days.' },
    { id: 2, title: 'Change Interest Rate', description: 'Proposal to change the interest rate to 5%.' },
  ];

  return (
    <div>
      <h1>Governance</h1>
      {/* Afficher les propositions et les votes ici */}
      <GovernanceVoteForm proposals={proposals} />
    </div>
  );
};

export default GovernancePage;
