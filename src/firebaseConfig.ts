// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // 앱 초기화를 위한 import
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 데이터베이스(파이어베이스) 사용을 위한 import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-abjjHUFH60-Qd8HKxlrZNkBHapLz9VM",
  authDomain: "todo-list-c652a.firebaseapp.com",
  projectId: "todo-list-c652a",
  storageBucket: "todo-list-c652a.appspot.com",
  messagingSenderId: "921892209466",
  appId: "1:921892209466:web:e64ba874cd4b3caf64c603",
  measurementId: "G-PQQY2CJ693",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
