import type ms from 'ms';
import 'dotenv/config';

export const config = {
    port: parseInt((process.env['SERVER_PORT'] as string) ?? 3000, 10),

    // JWT
    jwt: {
        secret: (process.env['JWT_SECRET'] as string) ?? '',
        expiration: process.env['JWT_EXP'] as ms.StringValue
    }
};
