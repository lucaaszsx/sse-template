import 'dotenv/config';

export const config = {
    port: parseInt(process.env['SERVER_PORT'] as string ?? 3000, 10)
};