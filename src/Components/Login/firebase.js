import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyCfV2fjV3Y87Lu0O5Yk5VJq6EEB12z43jo",
  authDomain: "chandpur-zila.firebaseapp.com",
  projectId: "chandpur-zila",
  storageBucket: "chandpur-zila.firebasestorage.app",
  messagingSenderId: "475160476891",
  appId: "1:475160476891:web:10c54c0b077e596f1e60fe"
};

// Initialize Firebase only if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the already initialized app
}

export default firebase;
