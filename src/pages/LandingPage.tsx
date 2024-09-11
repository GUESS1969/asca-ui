// src/pages/LandingPage.tsx
 // eslint-disable-next-line 
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import backgroundImage from './assets/bg-image.jpg';
import SocialMediaLinks from '../pages/SocialMediaLinks';
import { ConnectWalletButton } from '@cardano-foundation/cardano-connect-with-wallet';
import useWallet from '../hooks/useWallet';
import { useNetwork } from '../context/NetworkContext'; // Import Network Context

const LandingPage: React.FC = () => {
    const { isConnected, connectWallet, disconnect } = useWallet();
    const { network, setNetwork } = useNetwork(); // Get the network and a setter function to change it
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        if (isConnected) {
            navigate('/dashboard'); // Redirect to the dashboard upon wallet connection
        }
    }, [isConnected, navigate]);

    return (
        <div 
            className="relative bg-white" 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Navbar */}
            <nav className="flex items-center justify-between p-6">
                <div className="flex items-center">
                    <span className="text-xl font-bold text-blue-600">ASCA Protocol</span>
                </div>
                <div className="flex items-center space-x-8 text-gray-700">                
                    <a href="#features" className="hover:text-blue-600">Protocol Features</a>
                    <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
                    <a href="#testimonials" className="hover:text-blue-600">Community Stories</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-blue-600">Sign in</button>
                    {isConnected ? (
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700" onClick={disconnect}>
                            Disconnect
                        </button>
                    ) : (
                        <ConnectWalletButton 
                            message="Please connect your wallet" 
                            onConnect={connectWallet} 
                            primaryColor="#0538AF"
                            borderRadius={15}
                        />
                    )}
                    {/* Network Selector */}
                    <select
                        value={network}
                        onChange={(e) => setNetwork(e.target.value as 'mainnet' | 'testnet')}
                        className="text-gray-700 bg-white border border-gray-300 rounded-lg px-3 py-2"
                    >
                        <option value="mainnet">Mainnet</option>
                        <option value="testnet">Testnet</option>
                    </select>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="pt-20 pb-16 flex justify-center items-center">
                {/* Left side: Hero Text */}
                <div className="w-full max-w-md pr-8">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                        ASCA Protocol <span className="text-blue-600">simplifies savings and loans</span> for communities.
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Most tontine protocols are secure, but hard to use. We make the opposite trade-off, and ensure your assets are always protected.
                    </p>
                </div>

                {/* Right side: Form */}
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <p className="text-xl font-bold">Join the Community</p>
                        <p className="mt-2 text-gray-500">Be the first to know about new features, community events, and exclusive offers.</p>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="first-name" className="block text-gray-700">First Name*</label>
                            <input type="text" id="first-name" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last-name" className="block text-gray-700">Last Name*</label>
                            <input type="text" id="last-name" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email Address*</label>
                            <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Sign Up
                        </button>
                        <div className="mt-4 text-sm text-gray-600">
                            <p>
                                <strong>*</strong> Your provided information will be stored securely
                                and will not be shared with third parties without your explicit consent. By signing up, you agree
                                to our <a href="#" className="text-blue-600 underline">Privacy Policy</a> and 
                                <a href="#" className="text-blue-600 underline"> Terms of Service</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Discover the powerful features that make ASCA Protocol the best choice for community savings and loans.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Secure and Transparent</h3>
                            <p className="mt-2 text-gray-500">Our protocol ensures your assets are protected and all transactions are transparent and verifiable.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Decentralized Governance</h3>
                            <p className="mt-2 text-gray-500">Participate in the governance of your community with on-chain voting and decision-making.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Real-time Compliance</h3>
                            <p className="mt-2 text-gray-500">Automated compliance checks ensure that all participants meet the necessary standards.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Getting started with ASCA Protocol is easy. Follow these simple steps.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Step 1: Connect Your Wallet</h3>
                            <p className="mt-2 text-gray-500">Connect your wallet to join the ASCA Protocol and start managing your funds.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Step 2: Contribute & Save</h3>
                            <p className="mt-2 text-gray-500">Start contributing to your community’s tontine and watch your savings grow.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Step 3: Participate in Governance</h3>
                            <p className="mt-2 text-gray-500">Vote on important decisions and help shape the future of your community.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Community Stories</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        See what other communities have to say about their experience with ASCA Protocol.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700">"ASCA Protocol has transformed our community savings. It's easy to use and completely secure!"</p>
                            <p className="mt-4 text-gray-500">- Community Leader</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700">"Being able to access loans without traditional banks has been a game-changer for us."</p>
                            <p className="mt-4 text-gray-500">- ASCA User</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700">"The on-chain governance ensures transparency in every decision made."</p>
                            <p className="mt-4 text-gray-500">- Tontine Member</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Companies Section */}
            <div className="mt-16 pb-20">
                <p className="text-center text-gray-500 text-lg">Trusted by these communities so far</p>
                <div className="mt-8 flex justify-center space-x-10">
                    <img src="https://via.placeholder.com/120x40?text=Community1" alt="Community1" />
                    <img src="https://via.placeholder.com/120x40?text=Community2" alt="Community2" />
                    <img src="https://via.placeholder.com/120x40?text=Community3" alt="Community3" />
                    <img src="https://via.placeholder.com/120x40?text=Community4" alt="Community4" />
                    <img src="https://via.placeholder.com/120x40?text=Community5" alt="Community5" />
                    <img src="https://via.placeholder.com/120x40?text=Community6" alt="Community6" />
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">          
                    <SocialMediaLinks />  
                    <p>&copy; 2024 ASCA Protocol. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
