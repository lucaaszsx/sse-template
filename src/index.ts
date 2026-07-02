import { config } from './config.js';
import express from 'express';
import path from 'node:path';

/** Server setup */
const app = express();
app.use(express.static(path.resolve(import.meta.dirname, '..', 'public')));

/** Routes */
app.use();

/** Server initialization */
app.listen(config.port, () => console.log(`[info] server listening at localhost:${config.port}`));