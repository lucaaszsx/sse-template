import type { Request, Response } from 'express';
import { Router } from "express";

interface CreateUserOptions {
    username: string;
    password: string;
}

export const authRouter = Router();

authRouter.post('/auth/register', async (req: Request<unknown, unknown, CreateUserOptions>, res: Response) => {
    const data = req.body;
    
    if (!data.username || typeof data.username !== 'string') {
        res.json();
        return;
    }
    
    if (!data.password || typeof data.password !== 'string') {
        res.json();
        return;
    }

    // create user here and return the response
});

authRouter.post('/auth/login', async (req, res) => {
    // login logic here
});

authRouter.post('/auth/logout', async (req, res) => {
    // logout logic here
});