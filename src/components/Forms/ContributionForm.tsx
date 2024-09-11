import React, { useState } from 'react';
import styles from './Forms.module.css';

const ContributionForm: React.FC = () => {
    const [amount, setAmount] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement the contribution submission logic
        console.log(`Contributing ${amount} ADA`);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className="block mb-2 text-gray-700">
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </label>
            <button type="submit" className="mt-4 bg-[#6B63F6] text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600">
                Contribute
            </button>
        </form>
    );
};

export default ContributionForm;
