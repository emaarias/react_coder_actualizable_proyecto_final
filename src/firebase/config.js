
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWVLQpac-z-4pUSNkhSr0_sBk4YkULp-c",
  authDomain: "tp-final-actualizable-npx-ea.firebaseapp.com",
  projectId: "tp-final-actualizable-npx-ea",
  storageBucket: "tp-final-actualizable-npx-ea.appspot.com",
  messagingSenderId: "190612742671",
  appId: "1:190612742671:web:12dbd3cc02b8be9bad397a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const getFirestoreApp = ()=>{
	return app
}