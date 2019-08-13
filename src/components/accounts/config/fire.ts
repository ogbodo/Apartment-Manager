import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB71-SIL8Yw5JPhNM_UYTvLvRsqhmZB2PY",
  authDomain: "apartmentpro-f6a90.firebaseapp.com",
  databaseURL: "https://apartmentpro-f6a90.firebaseio.com",
  projectId: "apartmentpro-f6a90",
  storageBucket: "",
  messagingSenderId: "662806052056",
  appId: "1:662806052056:web:5ae938d9ef184c5d"
};

export default firebase.initializeApp(firebaseConfig);
