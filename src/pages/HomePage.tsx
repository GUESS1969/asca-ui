import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Shared/Card';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to ASCA</h1>
      <div>
        <Card title="Contribute">
          <p>View your contributions or add a new one.</p>
          <Link to="/contributions">Go to Contributions</Link>
        </Card>
        <Card title="Request a Loan">
          <p>Manage your loans or request a new loan.</p>
          <Link to="/loans">Go to Loans</Link>
        </Card>
        <Card title="Governance">
          <p>Participate in governance by voting on proposals.</p>
          <Link to="/governance">Go to Governance</Link>
        </Card>
        <Card title="Compliance">
          <p>Check your compliance status and manage KYC.</p>
          <Link to="/compliance">Go to Compliance</Link>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
