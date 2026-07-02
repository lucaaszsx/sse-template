import { sessionRepository } from '../repositories/sessionRepository.js';
import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { config } from '../config.js';
import jwt from 'jsonwebtoken';
import type { DecodedAccessTokenPayload } from '../types/common.js';

export function authorizationChecker(req: Request, res: Response, next: NextFunction): void {
    const auth = req.headers.authorization ?? '';
    const [tokenType, accessToken, ...restAuth] = auth.split(' ');
    
    if (tokenType !== 'Bearer' || !accessToken || restAuth.length > 0) {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized', error: true });
        return;
    }

    let payload;
    
    try {
        payload = jwt.verify(accessToken, config.jwt.secret) as DecodedAccessTokenPayload;
    } catch {
        // do nothing, next if statement will handle it
    }
    
    if (typeof payload !== 'object' || typeof payload.sub !== 'number' || typeof payload.session !== 'number') {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized', error: true });
        return;
    }

    const session = sessionRepository.getById(payload.session);
    if (!session) {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized', error: true });
        return;
    }

    req.payload = payload;
    next();
}