import {signOut} from '../firebase.js'

let dash = document.getElementById("dashbtn")

const dashLog = () =>{
    console.log("Dashboard")
    console.log("logout")

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
}

dash.addEventListener("click", dashLog)