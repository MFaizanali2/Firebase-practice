let box = document.querySelector(".box");
// let log = document.getElementById("log");
// log.style.width = `700px`

// box.innerHTML = `
// `









let formfield = document.querySelectorAll("form input")


console.log(formfield)
const [loginEmail, loginPassword] = formfield;

let data = JSON.parse(localStorage.getItem("userData"))

const login = () => {

    event.preventDefault();
    const { UserEmail, UserPassword } = data;

    if (UserEmail === loginEmail.value && UserPassword === loginPassword.value) {
        alert("login")
    } else {
        alert("invalid")
    }


    // console.log(loginEmail.value , loginPassword.value)
    // console.log(data)
    window.location.href = "../dashboard/dash.html";

}