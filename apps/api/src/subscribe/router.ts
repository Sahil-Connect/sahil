import { Router, Request, Response } from 'express';
import { sendPushNotification } from '../lib/webPush';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const subscription = req.body;
    const payload = JSON.stringify({ title: 'Push Test' });

    await sendPushNotification(subscription, payload);
    res.status(201).json({ message: 'Notification sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending notification' });
  }
});

export default router;
