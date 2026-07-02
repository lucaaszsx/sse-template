import { StatusCodes } from 'http-status-codes';
import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/@me', (req, res) => {
    const user = req.user!;
    res.status(StatusCodes.OK).json({ id: user.id, username: user.username });
});
