import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8A1EUpvcKhmlLnZBQYvt57j5eNlkSPQk",
  authDomain: "netflix-clone-a228a.firebaseapp.com",
  projectId: "netflix-clone-a228a",
  storageBucket: "netflix-clone-a228a.appspot.com",
  messagingSenderId: "1071420999870",
  appId: "1:1071420999870:web:70d12eb9d65f440f2936ef",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
