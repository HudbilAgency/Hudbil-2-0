importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChthegXSmzTrL0j9adF2dGwityfMR9S6o",
    authDomain: "notification-hudbil.firebaseapp.com",
    projectId: "notification-hudbil",
    storageBucket: "notification-hudbil.firebasestorage.app",
    messagingSenderId: "775570468595",
    appId: "1:775570468595:web:78ebfa2d2cbbb9255ad186",
    measurementId: "G-2401K2CDXP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    if (payload.notification) {
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,
            actions: [
                {
                    action: 'learn_more', // Identifier for the button
                    title: 'Learn more about us', // Button text
                    icon: 'https://www.hudbil.com/favicon-logo.png', // Optional icon for the button
                },
            ],
            data: {
                url: 'https://www.hudbil.com', // URL to open when the button is clicked
            },
        };

        // Show the notification
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

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('Notification click received:', event);

    // Close the notification
    event.notification.close();

    // Handle button click
    if (event.action === 'learn_more') {
        event.waitUntil(
            clients.openWindow(event.notification.data.url) // Open the provided URL
        );
    } else {
        // Handle notification body click (default action)
        event.waitUntil(
            clients.openWindow('https://www.hudbil.com') // Fallback URL
        );
    }
});
