import { Router, Request, Response } from "express";
import { sendPushNotification } from "../lib/web-push";

const router = Router();

// SMS, Email, Push
router.post("/", async (req: Request, res: Response) => {
  try {
    const subscription = req.body.subscription;
    const payload = JSON.stringify(req.body.data);

    await sendPushNotification(subscription, payload);
    res.status(201).json({ message: "Notification sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending notification" });
  }
});

export default router;
