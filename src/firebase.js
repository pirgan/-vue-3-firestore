import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBmczDqxbx3075Wfin4MGwNpLHpR8wry-c",
  authDomain: "bezkoder-firebase-a756b.firebaseapp.com",
  projectId: "bezkoder-firebase-a756b",
  storageBucket: "bezkoder-firebase-a756b.appspot.com",
  messagingSenderId: "493001546892",
  appId: "1:493001546892:web:ef32b3fcee39bc0ffd2fa9"
}

firebase.initializeApp(config);

export default firebase.firestore();