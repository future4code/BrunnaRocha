export interface UserTokenGateway {
    generateToken(userId: string): string;
    generateUserIdFromToken(token: string): string
}