import {initializeApp} from "firebase/app"
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBZaBLHF2xfDxs6UouJ-kFLnlaGKw7CATI",
    authDomain: "whatup-clone-b7a29.firebaseapp.com",
    projectId: "whatup-clone-b7a29",
    storageBucket: "whatup-clone-b7a29.appspot.com",
    messagingSenderId: "887870591494",
    appId: "1:887870591494:web:19866443a0010b98412987"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();



export {app,auth,provider}
