import { Router } from "express";

export const userRouter = Router();

userRouter.get('/users/@me', async (req, res) => {
    // gets info from the current user
});

