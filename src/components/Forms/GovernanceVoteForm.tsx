interface Proposal {
    id: number;
    title: string;
    description: string;
  }
  
  interface GovernanceVoteFormProps {
    proposals: Proposal[];
  }
  
  const GovernanceVoteForm: React.FC<GovernanceVoteFormProps> = ({ proposals }) => {
    return (
      <form>
        <label htmlFor="proposal">Select a Proposal:</label>
        <select id="proposal" name="proposal">
          {proposals.map((proposal) => (
            <option key={proposal.id} value={proposal.id}>
              {proposal.title}
            </option>
          ))}
        </select>
        {/* Additional form elements */}
      </form>
    );
  };
  
  export default GovernanceVoteForm;
  