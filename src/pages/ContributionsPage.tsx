import React from 'react';
import ContributionForm from '../components/Forms/ContributionForm';

const ContributionsPage: React.FC = () => {
  return (
    <div>
      <h1>Your Contributions</h1>
      {/* Afficher la liste des contributions ici */}
      <ContributionForm />
    </div>
  );
};

export default ContributionsPage;
