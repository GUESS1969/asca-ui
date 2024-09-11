// TODO: Replace `any` with the correct type when the `cardano-contract-lib` or equivalent library is available

export const interactWithContract = async (contract: any, methodName: string, params: any[]): Promise<any> => {
    try {
      const result = await contract.callMethod(methodName, params);
      return result;
    } catch (error) {
      console.error('Error interacting with contract:', error);
      throw error;
    }
  };
  
  // TODO: Replace `any` with the correct type when the `cardano-contract-lib` or equivalent library is available
  export const getContractState = async (contract: any): Promise<any> => {
    const state = await contract.getState();
    return state;
  };
  