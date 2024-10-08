import {auth, signInWithEmailAndPassword, onAuthStateChanged } from '../firebase';

let formfield = document.querySelectorAll("form input")
let loginBtn = document.getElementById("loginBtn")

const [loginEmail, loginPassword] = formfield;

const login = () =>{
    event.preventDefault();
    // console.log(loginEmail.value, loginPassword.value)
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Toastify({
        text: "login succesfully",      
        duration: 3000      
        }).showToast();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: `${errorMessage}`,      
        duration: 3000      
        }).showToast();
  });

       
}

loginBtn.addEventListener("click", login)



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
    window.location.href = "../dashboard/dashboard.html"
      // ...
    } 
    // else {
    //   // User is signed out
    //   // ...
    // }
  });


// console.log(formfield)
// let data = JSON.parse(localStorage.getItem("userData"))

// const login = () => {

//     event.preventDefault();
//     const { UserEmail, UserPassword } = data;

//     if (UserEmail === loginEmail.value && UserPassword === loginPassword.value) {
//         alert("login")
//     } else {
//         alert("invalid")
//     }


//     // console.log(loginEmail.value , loginPassword.value)
//     // console.log(data)
//     window.location.href = "../dashboard/dash.html";

// }