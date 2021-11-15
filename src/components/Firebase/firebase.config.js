console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDDfw5Wq-hZgeDKlc5pXcxQ_-r353US93k",
//   authDomain: "sunstore-769ce.firebaseapp.com",
//   projectId: "sunstore-769ce",
//   storageBucket: "sunstore-769ce.appspot.com",
//   messagingSenderId: "902009875128",
//   appId: "1:902009875128:web:b83a034e05d8c0e94aa24d",
// };

export default firebaseConfig;
