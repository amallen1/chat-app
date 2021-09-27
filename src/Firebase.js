import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDqpxEYsnP3Lix1cQmaG-Jg58DWWOZJL2Y",
  authDomain: "unichat-da0d2.firebaseapp.com",
  projectId: "unichat-da0d2",
  storageBucket: "unichat-da0d2.appspot.com",
  messagingSenderId: "86991473942",
  appId: "1:86991473942:web:924874af056dd0772b9437",
}).auth();
