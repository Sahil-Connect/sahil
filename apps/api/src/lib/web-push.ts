import { WebPushPrivateVapidKey, WebPushPublicVapidKey } from "../config";

const webPush = require("web-push");

export const setVapidKeys = () => {
  if (WebPushPrivateVapidKey && WebPushPublicVapidKey) {
    webPush.setVapidDetails(
      "mailto:test@test.com",
      WebPushPublicVapidKey,
      WebPushPrivateVapidKey
    );
  }
};

setVapidKeys();

export const sendPushNotification = (subscription: any, payload: any) => {
  return webPush.sendNotification(subscription, payload);
};
