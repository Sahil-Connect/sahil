self.addEventListener('push', (e) => {
  const data = e.data.json();

  console.log('Push Received...');

  const title = data.title || 'Notifications From Sahil - Agent';
  const body = data.body || 'Your order is being processed!';
  const icon = data.icon || '/logo.png';
  const url = data.url || '/';

  const options = {
    body: body,
    icon: icon,
    data: { url: url },
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();

  const urlToOpen = e.notification.data.url;

  e.waitUntil(
    self.clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then((windowClients) => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          // If so, just focus it.
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, then open the new URL
        if (self.clients.openWindow) {
          return self.clients.openWindow(urlToOpen);
        }
      })
  );
});
