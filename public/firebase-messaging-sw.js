// importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// const firebaseConfig = {
//     apiKey: "AIzaSyChthegXSmzTrL0j9adF2dGwityfMR9S6o",
//     authDomain: "notification-hudbil.firebaseapp.com",
//     projectId: "notification-hudbil",
//     storageBucket: "notification-hudbil.firebasestorage.app",
//     messagingSenderId: "775570468595",
//     appId: "1:775570468595:web:78ebfa2d2cbbb9255ad186",
//     measurementId: "G-2401K2CDXP"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     if (payload.notification) {
//         const notificationTitle = payload.notification.title;
//         const notificationOptions = {
//             body: payload.notification.body,
//             icon: payload.notification.icon,
//         };
//         if (self.registration && self.registration.showNotification) {
//             self.registration.getNotifications({ tag: payload.notification.tag }).then((existingNotifications) => {
//                 if (existingNotifications.length === 0) {
//                     self.registration.showNotification(notificationTitle, notificationOptions);
//                 } else {
//                     console.log('Duplicate notification avoided:', payload.notification.tag);
//                 }
//             });
//         }
//     }
// });

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
                    action: 'open_url',
                    title: 'Open Hudbil',
                    icon: 'https://www.hudbil.com/favicon-logo.png',
                },
            ],
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
    console.log('Notification click received: ', event);

    // Check if the action is "open_url"
    if (event.action === 'open_url') {
        event.notification.close(); // Close the notification
        
        // Try opening the link in an existing window or open a new one if possible
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
                const client = clientList.find((client) => client.url.includes('https://www.hudbil.com/'));
                if (client) {
                    // Focus the existing window if it's already open
                    client.focus();
                } else {
                    // Open a new window if no existing client matches
                    clients.openWindow('https://www.hudbil.com/');
                }
            })
        );
    } else {
        // Default action (notification body click)
        event.notification.close();
        event.waitUntil(
            clients.openWindow('https://www.hudbil.com/')
        );
    }
});
