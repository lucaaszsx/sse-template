import { notificationRouter } from './routes/notification.js';
import { authRouter } from './routes/auth.js';
import { userRouter } from './routes/user.js';
import { config } from './config.js';
import express from 'express';
import path from 'node:path';
import { authorizationChecker } from './middlewares/authorizationChecker.js';
import { currentUserChecker } from './middlewares/currentUserChecker.js';

// Server setup
const app = express();
app.use(express.static(path.resolve(import.meta.dirname, '..', 'public')));
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', authorizationChecker, currentUserChecker, userRouter);
app.use('/api/notifications', notificationRouter);

// Server initialization
app.listen(config.port, () => console.log(`[info] server listening at localhost:${config.port}`));
