
import { initializeApp } from "firebase/app"
import { getStorage, ref } from "firebase/storage"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDMuHYLTZ5im1vSMWjaseJWuZmE-tgq0LA",
  authDomain: "adonde-app.firebaseapp.com",
  projectId: "adonde-app",
  storageBucket: "adonde-app.appspot.com",
  messagingSenderId: "856042748200",
  appId: "1:856042748200:web:01350a4cac792a7024f81d",
  measurementId: "G-N6Q6580WSM"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebase)

export { storage }