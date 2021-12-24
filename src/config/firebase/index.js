import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHf6aTw9ZFvPs3Pk-A65W0bT408Noh-Tw",
    authDomain: "galonnostore.firebaseapp.com",
    projectId: "galonnostore",
    storageBucket: "galonnostore.appspot.com",
    messagingSenderId: "476640624936",
    appId: "1:476640624936:web:7831f7de0af1948462d01d",
    measurementId: "G-208NTTJ7HB",
    databaseURL :  'https://galonnostore-default-rtdb.asia-southeast1.firebasedatabase.app/',
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);
console.log(analytics, database);
export default firebaseConfig;