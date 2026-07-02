import { Router } from "express"

const notificationRouter = Router();

notificationRouter.post('/notifications', async (req, res) => {
    // ...
});

notificationRouter.get('/notifications', async (req, res) => {
    // ...
})

notificationRouter.get('/notifications/:id', async (req, res) => {
    // ...
})

notificationRouter.patch('/notifications/:id/read', async (req, res) => {
    // ...
});

notificationRouter.patch('/notifications/read-all', async (req, res) => {
    // ...
});

notificationRouter.get('/notifications/stream', async (req, res) => {
    // notification streaming logic here (use token in query params, since SSE doesn't support other headers like authorization)
});