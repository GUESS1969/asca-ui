
import React, { useState } from 'react';

const LoanRequestForm: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<string>('');
    const [loanPurpose, setLoanPurpose] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement loan request submission logic
        console.log(`Requesting loan of ${loanAmount} ADA for ${loanPurpose}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-gray-700">
                Loan Amount (in ADA):
                <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </label>
            <label className="block mb-2 text-gray-700">
                Purpose of Loan:
                <textarea
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </label>
            <button type="submit" className="mt-4 bg-[#6B63F6] text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600">
                Submit Loan Request
            </button>
        </form>
    );
};

export default LoanRequestForm;
