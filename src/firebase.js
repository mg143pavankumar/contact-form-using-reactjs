import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
	//needed to add config data
});

var db = firebaseApp.firestore();

export { db };
