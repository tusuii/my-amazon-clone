// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzDQWOkMwTZin2Wf_q6RPLPK_95yq2Yrc",
  authDomain: "clone-9314d.firebaseapp.com",
  projectId: "clone-9314d",
  storageBucket: "clone-9314d.appspot.com",
  messagingSenderId: "599903767205",
  appId: "1:599903767205:web:a8509b9683f7f399411b4c",
  measurementId: "G-KQ5DK311H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);