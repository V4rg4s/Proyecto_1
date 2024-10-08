//JS login panda
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

//entrada a funcion JavaScrpipt
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

//Cuando se hace clic en el imput de nombre de usuario
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

//Cuando se hace clic en el imput de contraseña
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

//Cuando se hace clic fuera de los imput
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

//Redireccionaar a pagina login 
function redireccionarlogin() {
  window.location.href= "login.html";
}

//redireccionar a pagina2
function redireccionar2(){
  window.location.href= "pagina2.html";
}

//Obtener los valores de los campos del formulario
document.getElementById('guardar_usuario').addEventListener('submit', function(event) {
  event.preventDefault();

const name = document.getElementById('nombre').value;
const mobileNumber = document.getElementById('numero_cel').value;
const id = document.getElementById('id').value;
const birthDate = document.getElementById('cumpleanos').value;

//Crear una nueva fila en la tabla
const tableBody = document.querySelector('#dataTable tbody');
const newRow = tableBody.insertRow();

//Insertar las celdas con los datos del formulario en la nueva fila
newRow.insertCell(0).textContent = name;
newRow.insertCell(1).textContent = mobileNumber;
newRow.insertCell(3).textContent = id;
newRow.insertCell(4).textContent = birthDate; 

//Limpiar formulario
document.getElementById('guardar_usuario').reset();

});
/* by codewars
https:www.instagram.com/p/C_p8H8cgl6M/?igsh=MThrYTh2ZXpzYm9wcg==
*/