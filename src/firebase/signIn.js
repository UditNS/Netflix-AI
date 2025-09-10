import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


export const signIn =  (email, password) => { 
    return  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user =  userCredential.user;
    return user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {errorCode, errorMessage};
});}