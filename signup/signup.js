import {auth } from '../firebase.js';

let formfield = document.querySelectorAll("form input")

const [UserEmail, UserPassword,] = formfield;

console.log(UserEmail, UserPassword)

console.log(auth)






// function signup(){
    
//     event.preventDefault();
    
//     // window.location.href = "../Login/login.html";
//     if(Username.value !== "" && UserEmail.value !== "" && UserPassword.value !== "" && Userpic !== ""){
//         let obj = {
//             user : Username.value,
//             signupEmail : UserEmail.value,
//             signupPassword : UserPassword.value,
//             pic : imgUrl,
//         }
//         localStorage.setItem("userData", JSON.stringify(obj))
//         // console.log(window.location.href = "../Login/login.html");
//         window.location.href = "../Login/login.html";
//         // arraydata.push(obj)
//         // console.log(arraydata)
//     console.log(Username.value, UserEmail.value, UserPassword.value, Userpic.value)
//     }else{
//         alert("pillay")
//     }
// }


//     // let image = document.getElementById("Userpic");
//     //     console.log(image)
//     // let showimage = document.querySelector("img")
//     const uploadimage = () =>{
//         let img = Userpic.files[0];
//         // console.log(Userpic, img);

//     let fileRead = new FileReader();
 
//     fileRead.onload = () =>{
//         imgUrl = fileRead.result;
//         // console.log(fileRead.result)
//     }
//     fileRead.readAsDataURL(img)
//     console.log(img)
// }