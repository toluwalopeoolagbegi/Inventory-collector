import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC9zsGQnZuDyPANhI_SZsN5aOqUqCbU68w",
    authDomain: "inventory-collector-478dd.firebaseapp.com",
    projectId: "inventory-collector-478dd",
    storageBucket: "inventory-collector-478dd.appspot.com",
    messagingSenderId: "332068158668",
    appId: "1:332068158668:web:de75976db1e833d8161669"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };