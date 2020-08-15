import firebase from 'firebase'



    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDo4ASJV1TTHS9_joxgHjMmXf0eka--1ts",
        authDomain: "clone-4c89f.firebaseapp.com",
        databaseURL: "https://clone-4c89f.firebaseio.com",
        projectId: "clone-4c89f",
        storageBucket: "clone-4c89f.appspot.com",
        messagingSenderId: "1070179250947",
        appId: "1:1070179250947:web:102c05b45f5731b0e76f36",
        measurementId: "G-RE4SVSBGPW"
    })
    
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    
    export { db, auth };

