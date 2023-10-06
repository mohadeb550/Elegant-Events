
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSMVEPaO9gRx5zF6JAZndneiKQwffspIw",
  authDomain: "social-events-6d6f5.firebaseapp.com",
  projectId: "social-events-6d6f5",
  storageBucket: "social-events-6d6f5.appspot.com",
  messagingSenderId: "201095117609",
  appId: "1:201095117609:web:21e6757c918ba353b29538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
