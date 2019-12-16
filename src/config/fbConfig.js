import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFIDKj4N7fakyjegoW8H4QKZ2wk5Apcl4",
    authDomain: "sports-bryte-72a43.firebaseapp.com",
    databaseURL: "https://sports-bryte-72a43.firebaseio.com",
    projectId: "sports-bryte-72a43",
    storageBucket: "sports-bryte-72a43.appspot.com",
    messagingSenderId: "679414260037",
    appId: "1:679414260037:web:b4f31f37b0d04446051e2c"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;