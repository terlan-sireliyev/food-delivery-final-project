import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPlOYFY3qwD5FP8tKBqI5bDtCTLHrWxw4",
  authDomain: "foody-app-59c1b.firebaseapp.com",
  databaseURL: "https://foody-app-59c1b-default-rtdb.firebaseio.com",
  projectId: "foody-app-59c1b",
  storageBucket: "foody-app-59c1b.appspot.com",
  messagingSenderId: "1028673746847",
  appId: "1:1028673746847:web:ed9637d981df9842dc6faa"
};

const app = initializeApp(firebaseConfig);
export const fileStorage = getStorage(app);
