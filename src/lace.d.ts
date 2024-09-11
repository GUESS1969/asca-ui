// src/lace.d.ts

interface LaceAPI {
    getUsedAddresses: () => Promise<string[]>;
    getBalance: () => Promise<string>;
    signTx: (tx: any) => Promise<any>;
    submitTx: (tx: any) => Promise<string>;
    // Ajoutez d'autres méthodes que Lace expose si nécessaire
}

interface Window {
    lace: LaceAPI;
}
