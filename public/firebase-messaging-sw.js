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
    console.log('[firebase-messaging-sw.js] Received background message');
    if (payload.notification) {
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,
        };
        if (self.registration && self.registration.showNotification) {
            self.registration.getNotifications({ tag: payload.notification.tag }).then((existingNotifications) => {
                if (existingNotifications.length === 0) {
                    self.registration.showNotification(notificationTitle, notificationOptions);
                } else {
                    console.log('Duplicate notification avoided');
                }
            });
        }
    }
});
