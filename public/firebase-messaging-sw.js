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

    event.notification.close();

    if (event.action === 'learn_more') {
        const url = event.notification.data?.url || 'https://www.hudbil.com';
        event.waitUntil(clients.openWindow(url));
    } else {
        const url = event.notification.data?.url || 'https://www.hudbil.com';
        event.waitUntil(clients.openWindow(url));
    }
});
