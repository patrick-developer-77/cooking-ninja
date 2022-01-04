import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC7ddusoRvTpvkfO6j876AY6fTd2VCyUHU",
  authDomain: "cooking-ninja-site-5a905.firebaseapp.com",
  projectId: "cooking-ninja-site-5a905",
  storageBucket: "cooking-ninja-site-5a905.appspot.com",
  messagingSenderId: "992987780687",
  appId: "1:992987780687:web:2cf07de7c89918358c3c3a"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }