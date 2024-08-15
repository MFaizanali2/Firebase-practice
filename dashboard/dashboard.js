let data = JSON.parse(localStorage.getItem("userData"))
let Usename = document.getElementById("name")
let images = document.getElementById("img")

const showdata = () =>{
    const {user, pic} = data
    
    Usename.innerHTML = user;
    images.src = pic;
    images.style.width = "50px"
}
showdata();

const logout = () =>{
    // console.log("hello")
    window.location.href = "../signup/signup.html"
}