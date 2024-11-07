// main.js

// Firebase configuration object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Register user function
  async function registerUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('User registered successfully!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }
  
  // Login user function
  async function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('User logged in successfully!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }