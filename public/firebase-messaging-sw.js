// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDxfH26kOtLaSTGTgY-dTbFeoIO42NKf1Y",
  authDomain: "vmo-igs-talent.firebaseapp.com",
  projectId: "vmo-igs-talent",
  storageBucket: "vmo-igs-talent.appspot.com",
  messagingSenderId: "286314282745",
  appId: "1:286314282745:web:8d9113e2acaad8918d6c28",
  measurementId: "G-X9H5KF5KNN"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});