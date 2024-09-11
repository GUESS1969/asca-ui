export interface WalletAPI {
    getAddress: () => Promise<string>;
    getBalance: () => Promise<number>;
    signTransaction: (tx: any) => Promise<any>;
    submitTransaction: (tx: any) => Promise<string>;
}

class WalletService {
    private walletAPI: WalletAPI;

    constructor(walletAPI: WalletAPI) {
        this.walletAPI = walletAPI;
    }

    async getAddress(): Promise<string> {
        return await this.walletAPI.getAddress();
    }

    async getBalance(): Promise<number> {
        return await this.walletAPI.getBalance();
    }

    async signTransaction(tx: any): Promise<any> {
        return await this.walletAPI.signTransaction(tx);
    }

    async submitTransaction(tx: any): Promise<string> {
        return await this.walletAPI.submitTransaction(tx);
    }
}

export default WalletService;
