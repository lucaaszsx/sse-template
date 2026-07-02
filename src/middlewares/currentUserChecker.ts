import { userRepository } from '../repositories/userRepository.js';
import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export function currentUserChecker(req: Request, res: Response, next: NextFunction): void {
    if (!req.payload || !req.payload?.sub) {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized', error: true });
        return;
    }

    const user = userRepository.getById(req.payload.sub);
    if (!user) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found', error: true });
        return;
    }

    req.user = user;
    next();
}