import { WebPushPrivateVapidKey, WebPushPublicVapidKey } from "../config";

const webPush = require("web-push");

webPush.setVapidDetails(
  "mailto:test@test.com",
  WebPushPublicVapidKey,
  WebPushPrivateVapidKey
);

export const sendPushNotification = (subscription: any, payload: any) => {
  return webPush.sendNotification(subscription, payload);
};
