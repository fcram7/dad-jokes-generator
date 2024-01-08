import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0XGnh36CoDZjNzePiqaFqiBZ370x3e2I",
  authDomain: "dad-jokes-c5202.firebaseapp.com",
  projectId: "dad-jokes-c5202",
  storageBucket: "dad-jokes-c5202.appspot.com",
  messagingSenderId: "156872272781",
  appId: "1:156872272781:web:92baf68f4abe3294812bc4"
}

const app = initializeApp(firebaseConfig)

export { app }