import React, { useState, useEffect } from 'react';

const AccountManagement: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the account details from the backend or state management
    // For example:
    const fetchedUsername = "JohnDoe"; // Replace with actual data
    const fetchedEmail = "john.doe@example.com"; // Replace with actual data
    const fetchedWalletAddress = "addr_test1..."; // Replace with actual data

    setUsername(fetchedUsername);
    setEmail(fetchedEmail);
    setWalletAddress(fetchedWalletAddress);
  }, []);

  const handleSaveChanges = () => {
    // Update the user details on the backend or state management
    console.log("Updated username:", username);
    console.log("Updated email:", email);
    console.log("Wallet address remains:", walletAddress);

    // Save changes logic here
    setEditMode(false);
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Account Management</h2>

      {editMode ? (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Wallet Address</label>
            <input
              type="text"
              value={walletAddress}
              readOnly
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100"
            />
            <p className="text-sm text-gray-500 mt-1">To change your wallet address, disconnect and connect a new wallet.</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setEditMode(false)}
              className="mr-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Username</p>
            <p className="text-lg font-semibold">{username}</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Email</p>
            <p className="text-lg font-semibold">{email}</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Wallet Address</p>
            <p className="text-lg font-semibold">{walletAddress}</p>
            <p className="text-sm text-gray-500 mt-1">To change your wallet address, disconnect and connect a new wallet.</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Edit Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
