import { auth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged  } from '../firebase.js';

// let googleBtn = document.getElementById('googleBtn');
// let logoutbtn = document.getElementById('logoutbtn')
// const provider = new GoogleAuthProvider();

// const googleSign = () => {
//     console.log("signin")
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             console.log(user) 
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorMessage)
//             const email = error.customData.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// }

// const logout = () =>{
//     console.log("logout")
//     signOut(auth).then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
  
// }


// logoutbtn.addEventListener('click', logout)
// googleBtn.addEventListener('click', googleSign)


let email = document.getElementById("email");
let password = document.getElementById("password")
let signup = document.getElementById("signupbtn")

const signInAdmin = () =>{
    event.preventDefault();
    // console.log("admin signin")

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("sign in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}

signup.addEventListener('click', signInAdmin)