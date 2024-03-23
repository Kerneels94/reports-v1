// Firebase
import fb from '../firebase/auth';
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function loginUser(email: string, password: string) {
    // Firebase login in user
    createUserWithEmailAndPassword(fb.firebaseAuth, email, password)
      .then((userCredential: any) => {
        console.log('Store: ', userCredential.user)
          const user = userCredential.user;
          return user;
      })
      .catch((error: any) => {
        // todo display error popup
        const errorCode = error.code
        const errorMessage = error.message
  
        console.error('Error code: ' + errorCode)
        console.error('Error Message: ' + errorMessage)
      })
}