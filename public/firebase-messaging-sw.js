importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyChthegXSmzTrL0j9adF2dGwityfMR9S6o",
    authDomain: "notification-hudbil.firebaseapp.com",
    projectId: "notification-hudbil",
    storageBucket: "notification-hudbil.firebasestorage.app",
    messagingSenderId: "775570468595",
    appId: "1:775570468595:web:78ebfa2d2cbbb9255ad186",
    measurementId: "G-2401K2CDXP"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    if (payload.notification) {
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,
            actions: [
                {
                    action: 'learn_more',
                    title: 'Learn more about us',
                    icon: 'https://www.hudbil.com/favicon-logo.png',
                },
            ],
            data: {
                url: 'https://www.hudbil.com',
            },
        };

        if (self.registration && self.registration.showNotification) {
            self.registration.getNotifications({ tag: payload.notification.tag }).then((existingNotifications) => {
                if (existingNotifications.length === 0) {
                    self.registration.showNotification(notificationTitle, notificationOptions);
                } else {
                    console.log('Duplicate notification avoided:', payload.notification.tag);
                }
            });
        }
    }
});

self.addEventListener('notificationclick', (event) => {
    console.log('Notification click received:', event);

    // Close the notification when clicked
    event.notification.close();

    // Get the URL from the notification data (or use a fallback URL)
    const url = event.notification.data?.url || 'https://www.hudbil.com';

    // Try opening the URL in the background or bring the tab to focus
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                // If the tab with the URL is already open, focus it
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If the URL is not open, open it in a new window
            if (clients.openWindow) {
                return clients.openWindow(url); // This will open a new tab/window
            }
        })
    );
});

