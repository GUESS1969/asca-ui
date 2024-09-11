import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NetworkProvider } from './context/NetworkContext';
import LandingPage from './pages/LandingPage';
import ContributionsPage from './pages/ContributionsPage';
import LoansPage from './pages/LoansPage';
import GovernancePage from './pages/GovernancePage';
import Dashboard from './pages/Dashboard'; // Ensure Dashboard is correctly imported

function App() {
    return (
        <NetworkProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contributions" element={<ContributionsPage />} />
                    <Route path="/loans" element={<LoansPage />} />
                    <Route path="/governance" element={<GovernancePage />} />
                </Routes>
            </Router>
        </NetworkProvider>
    );
}

export default App;
