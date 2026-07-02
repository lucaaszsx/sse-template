import { sessionRepository } from '../repositories/sessionRepository.js';
import { userRepository } from '../repositories/userRepository.js';
import type { AccessTokenPayload } from '../types/common.js';
import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { config } from '../config.js';
import { Router } from 'express';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface CreateUserParams {
    username: string;
    password: string;
}

interface LoginParams {
    username: string;
    password: string;
}

const SALT_ROUNDS = 12;

export const authRouter = Router();

authRouter.post(
    '/register',
    async (req: Request<unknown, unknown, CreateUserParams>, res: Response) => {
        const data = req.body;

        if (!data.username || typeof data.username !== 'string') {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Missing a valid username',
                error: true
            });
            return;
        }

        if (!data.password || typeof data.password !== 'string') {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Missing a valid password',
                error: true
            });
            return;
        }

        const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS);
        userRepository.create(data.username, passwordHash);

        res.sendStatus(StatusCodes.CREATED);
    }
);

authRouter.post('/login', async (req: Request<unknown, unknown, LoginParams>, res: Response) => {
    const data = req.body;

    if (!data?.username || !data?.password) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Missing email or password',
            error: true
        });
        return;
    }

    const user = userRepository.getByUsername(data.username);
    const passwordMatches = await bcrypt.compare(data.password, user.password);
    if (!user || !passwordMatches) {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized', error: true });
        return;
    }

    const session = sessionRepository.create(user.id);
    const payload: AccessTokenPayload = { sub: user.id, session: session.id };
    const accessToken = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiration });
    
    return res.json({ accessToken });
});
