export default {
    API_ENDPOINT: 'http://localhost:8000/api',
    TOKEN_KEY: 'holistic-client-auth-token',
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
}