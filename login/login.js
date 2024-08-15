
let formfield = document.querySelectorAll("form input")
let loginBtn = document.getElementById("loginBtn")

const [loginEmail, loginPassword] = formfield;




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