import fb from 'firebase-admin';
// import accountKey from '../config/firebaseAccountKey.json';

const accountKey = require('../config/firebaseAccountKey.json');

try {
  fb.initializeApp({
    credential: fb.credential.cert(accountKey),
  });
} catch (error) {
  console.log('Error: Firebase init fail');
  console.log(error);
}

const db = fb.firestore();

export { db };
