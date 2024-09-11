// src/pages/Dashboard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/contributions" className="dashboard-link">
                    <div className="p-4 bg-blue-600 text-white rounded-lg">Contribute</div>
                </Link>
                <Link to="/loans" className="dashboard-link">
                    <div className="p-4 bg-green-600 text-white rounded-lg">Borrow</div>
                </Link>
                <Link to="/governance" className="dashboard-link">
                    <div className="p-4 bg-purple-600 text-white rounded-lg">Vote</div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
