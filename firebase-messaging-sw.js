importScripts(
'https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js'
);

importScripts(
'https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyD2X3tHdu9BBG6wiN7poyvsDWfrj95JlgU",
  authDomain: "classeo-53f9d.firebaseapp.com",
  projectId: "classeo-53f9d",
  storageBucket: "classeo-53f9d.firebasestorage.app",
  messagingSenderId: "371736144457",
  appId: "1:371736144457:web:4539955acfa23071a12d98"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/favicon.png"
    }
  );

});
