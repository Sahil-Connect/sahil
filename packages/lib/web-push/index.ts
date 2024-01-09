// Converts a URL-safe base64 string to a Uint8Array
const urlBase64ToUint8Array = (base64String: string) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// Registers the service worker
export const registerServiceWorker = async (
  workerURL: string,
  options?: {}
) => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    const registration = await navigator.serviceWorker.register(workerURL, {
      scope: '/',
      ...options,
    });
    console.log('Service Worker Registered');
    return registration;
  } else {
    console.error('Service Worker or Push Messaging not supported');
    throw new Error('Service Worker or Push Messaging not supported');
  }
};

// Subscribes the client to push notifications
export const subscribeToPush = async (
  registration: ServiceWorkerRegistration,
  publicVapidKey: string
) => {
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });
  console.log('Push Subscribed');
  return subscription;
};

// Unsubscribes the client from push notifications
export const unsubscribeFromPush = async (subscription: PushSubscription) => {
  const successful = await subscription.unsubscribe();
  if (successful) {
    console.log('Unsubscribed from Push Notifications');
  } else {
    console.error('Failed to unsubscribe from Push Notifications');
  }
  return successful;
};

// Sends the push subscription to the server
export const sendNotification = async ({
  subscription,
  serverUrl,
  data,
}: {
  subscription: PushSubscription;
  serverUrl: string;
  data?: any;
}) => {
  const requestBody = {
    subscription: subscription,
    data: data,
  };

  const response = await fetch(serverUrl, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to send notification request to server');
  }

  console.log('Notification request sent to server');
};

// Request Notifications Permissions
export const requestNotificationPermission = async (): Promise<string> => {
  if (!('Notification' in window)) {
    alert('This browser does not support notifications.');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    console.log('Permission to receive notifications has been granted');
    return 'granted';
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Permission to receive notifications has been granted');
    } else {
      console.log('Permission to receive notifications has been denied');
    }
    return permission;
  } catch (error) {
    console.error(
      'An error occurred while requesting notification permission',
      error
    );
    return 'denied';
  }
};
