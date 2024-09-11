import axios from 'axios';

const API_BASE_URL = 'https://example.com/api'; // Remplacez par l'URL de votre backend ou API

interface Proposal {
  id: number;
  title: string;
  description: string;
}

class GovernanceService {
  // Récupère la liste des propositions de gouvernance
  async getProposals(): Promise<Proposal[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/governance/proposals`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch governance proposals:', error);
      throw error;
    }
  }

  // Soumet un vote pour une proposition de gouvernance
  async voteOnProposal(proposalId: number, support: boolean): Promise<void> {
    try {
      const response = await axios.post(`${API_BASE_URL}/governance/vote`, {
        proposalId,
        support,
      });
      return response.data;
    } catch (error) {
      console.error('Failed to vote on governance proposal:', error);
      throw error;
    }
  }

  // Récupère l'état actuel d'une proposition de gouvernance
  async getProposalState(proposalId: number): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/governance/proposals/${proposalId}/state`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch proposal state:', error);
      throw error;
    }
  }
}

export default new GovernanceService();
