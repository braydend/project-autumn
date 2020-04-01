import firebase from "firebase";

const getFirestoreInstance = (
  connection: firebase.app.App
): firebase.firestore.Firestore => connection.firestore();

export { getFirestoreInstance };
