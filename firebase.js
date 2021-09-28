// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUTYAJcFpWtq-Op01UI97hWGXezoePq1I",
  authDomain: "fir-auth-reactnative-7d3bf.firebaseapp.com",
  projectId: "fir-auth-reactnative-7d3bf",
  storageBucket: "fir-auth-reactnative-7d3bf.appspot.com",
  messagingSenderId: "959462329719",
  appId: "1:959462329719:web:c8e5126be32c49a30b2572",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
