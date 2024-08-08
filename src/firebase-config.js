import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC827ZXQaaxo8JN8QR_Jl8gFV0tpR8aoIc",
    authDomain: "majorproject-221fc.firebaseapp.com",
    projectId: "majorproject-221fc",
    storageBucket: "majorproject-221fc.appspot.com",
    messagingSenderId: "1001538695937",
    appId: "1:1001538695937:web:9783d6779add641170e100",
    measurementId: "G-YEVQX9EBF0"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
