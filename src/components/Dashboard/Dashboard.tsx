

import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
    return (
        <div className={styles.dashboard}>
            <h1>Your ASCA Dashboard</h1>
            {/* TODO: Display user-specific information here */}
        </div>
    );
};

export default Dashboard;
