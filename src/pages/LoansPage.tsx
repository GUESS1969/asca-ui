import React from 'react';
import LoanRequestForm from '../components/Forms/LoanRequestForm';

const LoansPage: React.FC = () => {
  return (
    <div>
      <h1>Your Loans</h1>
      {/* Afficher la liste des prêts ici */}
      <LoanRequestForm />
    </div>
  );
};

export default LoansPage;
