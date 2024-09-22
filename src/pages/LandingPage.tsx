import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/bg-image.jpg';
import SocialMediaLinks from '../pages/SocialMediaLinks';
import { ConnectWalletButton } from '@cardano-foundation/cardano-connect-with-wallet';
import useWallet from '../hooks/useWallet';
import { useNetwork } from '../context/NetworkContext'; // Import Network Context

const LandingPage: React.FC = () => {
    const { isConnected, connectWallet, disconnect } = useWallet();
    const { network, setNetwork } = useNetwork(); // Get the network and a setter function to change it
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between login and signup mode

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLoginData({ ...loginData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isLoginMode) {
            // Handle login submission
            if (!loginData.email || !loginData.password) {
                setError('Tous les champs sont obligatoires.');
                return;
            }

            // Simulate login submission (replace this with actual API logic)
            console.log('Login Data Submitted:', loginData);
            setError('');
            alert('Connexion réussie!');
            navigate('/dashboard'); // Redirect after successful login
        } else {
            // Handle signup submission
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
                setError('Tous les champs sont obligatoires.');
                return;
            }

            if (formData.password !== formData.confirmPassword) {
                setError('Les mots de passe ne correspondent pas.');
                return;
            }

            // Simulate signup submission (replace this with actual API logic)
            console.log('Signup Data Submitted:', formData);
            setError('');
            alert('Inscription réussie! Merci de nous avoir rejoint.');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    };

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
                    <span className="text-xl font-bold text-blue-600">Protocole ASCA</span>
                </div>
                <div className="flex items-center space-x-8 text-gray-700">
                    <a href="#features" className="hover:text-blue-600">Fonctionnalités du protocole</a>
                    <a href="#how-it-works" className="hover:text-blue-600">Comment ça marche</a>
                    <a href="#testimonials" className="hover:text-blue-600">Témoignages des utilisateurs</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        className="text-gray-700 hover:text-blue-600"
                        onClick={() => setIsLoginMode(true)}
                    >
                        Connexion
                    </button>
                    <button 
                        className="text-gray-700 hover:text-blue-600"
                        onClick={() => setIsLoginMode(false)}
                    >
                        Inscription
                    </button>
                    {isConnected ? (
                        <button 
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                            onClick={disconnect}
                        >
                            Déconnexion
                        </button>
                    ) : (
                        <ConnectWalletButton 
                            message="Connectez votre portefeuille" 
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
                        Le protocole ASCA <span className="text-blue-600">simplifie les épargnes et prêts</span> pour les communautés.
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        La plupart des protocoles de tontine sont sécurisés, mais difficiles à utiliser. Nous faisons le compromis inverse et nous assurons que vos actifs soient toujours protégés.
                    </p>
                </div>

                {/* Right side: Form */}
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <p className="text-xl font-bold">{isLoginMode ? 'Connexion' : 'Rejoignez la communauté'}</p>
                        <p className="mt-2 text-gray-500">
                            {isLoginMode ? 'Connectez-vous pour accéder à votre compte.' : 'Soyez les premiers informés des nouvelles fonctionnalités, des événements communautaires et des offres exclusives.'}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {isLoginMode ? (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">Email Adresse*</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={loginData.email} 
                                        onChange={handleLoginChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700">Mot de Passe*</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        value={loginData.password} 
                                        onChange={handleLoginChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-gray-700">Prénom*</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleInputChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700">Nom*</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleInputChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">Email Adresse*</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={formData.email} 
                                        onChange={handleInputChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700">Mot de Passe*</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        value={formData.password} 
                                        onChange={handleInputChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirmer le Mot de Passe*</label>
                                    <input 
                                        type="password" 
                                        id="confirmPassword" 
                                        value={formData.confirmPassword} 
                                        onChange={handleInputChange} 
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg" 
                                    />
                                </div>
                            </>
                        )}
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            {isLoginMode ? 'Se Connecter' : 'S\'inscrire'}
                        </button>
                        <div className="mt-4 text-sm text-gray-600">
                            <p>
                                <strong>*</strong> Les informations que vous fournissez seront stockées de manière sécurisée et ne seront pas partagées avec des tiers sans votre consentement explicite. 
                                En vous inscrivant, vous acceptez notre <a href="#" className="text-blue-600 underline">Politique de Confidentialité</a> et 
                                <a href="#" className="text-blue-600 underline">nos Conditions d'Utilisation</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Fonctionnalités du Protocole</h2>
                    <div className="flex flex-wrap -mx-4">
                        {/* Feature 1 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-blue-600">Sécurité Avancée</span></h3>
                                <p className="text-gray-700">Nous utilisons les dernières technologies pour garantir la sécurité et la confidentialité de vos actifs.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-blue-600">Interface Intuitive</span></h3>
                                <p className="text-gray-700">Notre interface utilisateur est conçue pour être facile à utiliser, même pour les débutants.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-blue-600">Support Communautaire</span></h3>
                                <p className="text-gray-700">Rejoignez une communauté active et bénéficiez d'un support et de conseils de la part d'autres utilisateurs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Comment ça marche</h2>
                    <div className="flex flex-wrap -mx-4">
                        {/* Step 1 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-blue-600">Étape 1</span></h3>
                                <p className="text-gray-700">Connectez votre portefeuille pour commencer à utiliser notre protocole.</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-blue-600">Étape 2</span></h3>
                                <p className="text-gray-700">Créez votre compte ou rejoignez une tontine en quelques clics.</p>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-blue-600">Étape 3</span></h3>
                                <p className="text-gray-700">Profitez des avantages de notre protocole sécurisé et transparent.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Témoignages des Utilisateurs</h2>
                    <div className="flex flex-wrap -mx-4">
                        {/* Testimonial 1 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-700">“Le protocole ASCA a révolutionné la façon dont je gère mes épargnes. Très facile à utiliser et très sécurisé!”</p>
                                <p className="mt-4 font-semibold text-gray-900">Micro Credit - CREDIT FEF</p>
                                <p className="text-gray-600">Utilisateur satisfait</p>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-700">“Une expérience utilisateur exceptionnelle! J'apprécie vraiment le support communautaire.”</p>
                                <p className="mt-4 font-semibold text-gray-900">JEUNES GUINEENS DE FRANCE</p>
                                <p className="text-gray-600">Client fidèle</p>
                            </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-700">“Un service incroyable avec une sécurité de premier ordre. Je recommande vivement!”</p>
                                <p className="mt-4 font-semibold text-gray-900">Tontine Amour Plus</p>
                                <p className="text-gray-600">Utilisateur heureux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        {/* Footer */}
                        <footer className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">          
                    <SocialMediaLinks />  
                    <p>&copy; 2024 Protocole ASCA développé par <span className="text-blue-600">EBURNIE LABS</span>. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
        
    );
};

export default LandingPage;
