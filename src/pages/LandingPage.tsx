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
                    <span className="text-xl font-bold text-blue-600">Protocole ASCA </span> 
                    <span className="text-xl font-bold text-blue-600"> </span>  
                </div>
                <div className="flex items-center space-x-8 text-gray-700">                
                    <a href="#features" className="hover:text-blue-600">Fonctionnalités du protocole.</a>
                    <a href="#how-it-works" className="hover:text-blue-600">Comment ça marche</a>
                    <a href="#testimonials" className="hover:text-blue-600">Témoignages des utilisateurs</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-blue-600">Connexion</button>
                    {isConnected ? (
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700" onClick={disconnect}>
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
                        Le protocole ASCA <span className="text-blue-600">simplifie les épargnes et prêts </span> pour les communautés.
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                    La plupart des protocoles de tontine sont sécurisés, mais difficiles à utiliser. Nous faisons le compromis inverse et nous assurons que vos actifs soient toujours protégés..
                    </p>
                </div>

                {/* Right side: Form */}
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <p className="text-xl font-bold">Rejoignez la communauté</p>
                        <p className="mt-2 text-gray-500">Soyez les premiers informés des nouvelles fonctionnalités, des événements communautaires et des offres exclusives.</p>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="first-name" className="block text-gray-700">Prénom*</label>
                            <input type="text" id="first-name" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last-name" className="block text-gray-700">Nom*</label>
                            <input type="text" id="last-name" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email Adresse*</label>
                            <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            S'inscrire
                        </button>
                        <div className="mt-4 text-sm text-gray-600">
                            <p>
                                <strong>*</strong> Les informations que vous fournissez seront stockées de manière sécurisée et ne seront pas partagées avec des tiers sans votre consentement explicite. 
                                En vous inscrivant, vous acceptez notre <a href="#" className="text-blue-600 underline">Politique de Confidentialité </a> et  
                                <a href="#" className="text-blue-600 underline"> nos Conditions d'Utilisation.</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Fonctionnalités Clés</h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Découvrez les fonctionnalités puissantes qui font du protocole ASCA le meilleur choix pour l'éparges et les prêts communautaires.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Sécurisé et Transparent.</h3>
                            <p className="mt-2 text-gray-500">Notre protocole garantit que vos actifs sont protégés et que toutes les transactions sont transparentes et vérifiables.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Gouvernance  Décentralisée</h3>
                            <p className="mt-2 text-gray-500">Participez à la gouvernance de votre communauté grâce au vote et à la prise de décision.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Conformité en temps réel.</h3>
                            <p className="mt-2 text-gray-500">Les contrôles de conformité automatisés garantissent que tous les participants respectent les normes nécessaires.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Comment ça marche</h2>
                    <p className="mt-4 text-lg text-gray-500">
                       Commencer avec le protocole ASCA est facile. Suivez ces étapes ci-dessous.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Etape 1: Connectez votre portefeuille</h3>
                            <p className="mt-2 text-gray-500">Connectez votre portefeuille pour rejoindre le protocole ASCA et commencer à gérer vos fonds</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Etape 2: Contribuer et Économiser.</h3>
                            <p className="mt-2 text-gray-500">Commencez à contribuer à la tontine de votre communauté et regardez vos économies croître.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600">Etape 3: Participez à la Gouvernance</h3>
                            <p className="mt-2 text-gray-500">Votez sur des décisions importantes et contribuez à façonner l'avenir de votre communauté.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Témoignages de la communauté</h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Découvrez ce que d'autres communautés disent de leur expérience avec le protocole ASCA.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700">"Le protocole ASCA a transformé nos économies communautaires. Il est facile à utiliser et complètement sécurisé !"</p>
                            <p className="mt-4 text-gray-500">- Leader Commaunautaire</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700">"Pouvoir accéder à des prêts sans passer par les banques traditionnelles a été une véritable révolution pour nous."</p>
                            <p className="mt-4 text-gray-500">- Utilisateur</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700">"La gouvernance sur chaîne assure la transparence dans chaque décision prise."</p>
                            <p className="mt-4 text-gray-500">- Membre</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Companies Section */}
            <div className="mt-16 pb-20">
                <p className="text-center text-gray-500 text-lg">Nous font confiance</p>
                <div className="mt-8 flex justify-center space-x-10">
                    <img src="https://via.placeholder.com/120x40?text=IUA-ABIDJAN" alt="IUA" />
                    <img src="https://via.placeholder.com/120x40?text=IADEC" alt="IADEC" />
                    <img src="https://via.placeholder.com/120x40?text=ES2I" alt="ES2I" />
                    <img src="https://via.placeholder.com/120x40?text=CREDIT FEF" alt="CREDIT FEF" />
                    <img src="https://via.placeholder.com/120x40?text=ATLANTIS" alt="ATLANTIS" />
                    <img src="https://via.placeholder.com/120x40?text=IVOGROUP" alt="IVOGROUP" />
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">          
                    <SocialMediaLinks />  
                    <p>&copy; 2024 Protocole ASCA. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
