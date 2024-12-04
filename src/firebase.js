import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyChthegXSmzTrL0j9adF2dGwityfMR9S6o",
    authDomain: "notification-hudbil.firebaseapp.com",
    projectId: "notification-hudbil",
    storageBucket: "notification-hudbil.firebasestorage.app",
    messagingSenderId: "775570468595",
    appId: "1:775570468595:web:78ebfa2d2cbbb9255ad186",
    measurementId: "G-2401K2CDXP"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);