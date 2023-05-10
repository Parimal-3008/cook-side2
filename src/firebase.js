import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  // Paste the Firebase configuration object generated in Step 1 here
  apiKey: "AIzaSyBZ85bYj_L5abT1URXC8kSS1ivH2PZtThY",
  authDomain: "cookside2.firebaseapp.com",
  projectId: "cookside2",
  storageBucket: "cookside2.appspot.com",
  messagingSenderId: "726061544940",
  appId: "1:726061544940:web:299bdedc476ad62eab3cc9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
