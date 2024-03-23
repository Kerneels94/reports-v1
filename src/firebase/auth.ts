import firebase from 'firebase';
// Env file
const env = import.meta.env

const firebaseConfig = {
    apiKey: env.VITE_APP_API_KEY,
    authDomain: env.VITE_APP_AUTH_DOMAIN,
    databaseURL: env.VITE_APP_DATABASE_URL,
    projectId: env.VITE_APP_PROJECT_ID,
    storageBucket: env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: env.VITE_APP_MESSAGING_SENDER_ID,
    appId: env.VITE_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
 
export default database;

