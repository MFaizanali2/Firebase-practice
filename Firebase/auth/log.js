import { auth, GoogleAuthProvider, signInWithPopup } from '../firebase.js';

let googleBtn = document.getElementById('googleBtn');
let logoutbtn = document.getElementById('logoutbtn')
const provider = new GoogleAuthProvider();

const googleSign = () => {
    console.log("signin")
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user) 
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

const logout = () =>{
    console.log("logout")
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  
}


logoutbtn.addEventListener('click', logout)
googleBtn.addEventListener('click', googleSign)