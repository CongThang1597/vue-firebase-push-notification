// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyANrk50AHOyfUSPRS3cZlEls6Ko0uSmCEM",
  authDomain: "igt-test-ffed7.firebaseapp.com",
  projectId: "igt-test-ffed7",
  storageBucket: "igt-test-ffed7.appspot.com",
  messagingSenderId: "896668245237",
  appId: "1:896668245237:web:436fa7199c91c5a490b9bc",
  measurementId: "G-FWV4DL59DS"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});