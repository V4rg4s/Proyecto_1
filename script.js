//JS login panda
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
//Return to html2
function redireccionarpagina2(){
  console.log("Redirigiendo a página 2");
  window.location.href = "./pagina2.html";
}
//Return to login
function redireccionarlogin(){
  console.log("Redirigiendo a login");
  window.location.href = "./login.html";
}
// Función para validar el login con datos definidos localmente
function validarLogin(){
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value; 

// Validación de campos vacíos
if (!username || !password) {
    document.getElementById("error-message").innerText = "Por favor, complete ambos campos.";
    return;
  }

//Guardar informacion usuario 
function guardarNombreUsuario(username) {
  localStorage.setItem("nombreUsuario", username);
}

// Valores fijos de usuario y contraseña
  var usuarioCorrecto = "admin";
  var passwordCorrecta = "12345";
  var usuarioCorrecto = "karen";
  var passwordCorrecta = "040622";
  var usuarioCorrecto = "andres";
  var passwordCorrecta = "1077";
  
// Validamos el login
    if (username === usuarioCorrecto && password === passwordCorrecta) {
    console.log("Login exitoso, redirigiendo a página 2");
    guardarNombreUsuario(username); // Guardar el nombre de usuario
    window.location.href = "./pagina2.html"; 

// Redirigir si es correcto
  } else {
    console.log("Login fallido");
    document.getElementById("error-message").innerText = "Usuario o contraseña incorrectos.";
  }
}
//entrada a funcion JavaScript
let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};
//When clicked on username input
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;  
  `;
  eyeR.style.cssText = `
    right: 0.75em;
    top: 1.12em;
  `;
  normalHandStyle();
});
//When clicked on password input
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});
//When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});
/* by codewars
https:www.instagram.com/p/C_p8H8cgl6M/?igsh=MThrYTh2ZXpzYm9wcg==
*/