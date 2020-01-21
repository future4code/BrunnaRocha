export interface CryptoGateway {
    hash(word: string): Promise<string>;
}