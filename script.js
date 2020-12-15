//Ocultar y Mostrar el menu lateral cuando clickamos en el icono de Hamburguesa

const toggle = document.getElementById("toggle");

const toggleSidebar = () => document.body.classList.toggle("show-nav");

toggle.addEventListener("click", toggleSidebar);

//Abrir el modal cuando clickamos en el botón SignUp, y cerrarlo cuando clickamos en la x

const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

const openModal = () => modal.classList.add("show-modal");
const closeModal = () => modal.classList.remove("show-modal");

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

//Añadir lógica de validación en el formulario

const form = document.getElementById("modal-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const showError = (input, message) => {
  const inputParent = input.parentElement;
  inputParent.className = "modal-formDiv error";
  const small = inputParent.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const inputParent = input.parentElement;
  inputParent.className = "modal-formDiv ok";
};

//la funcion emailValido ya no es necesaria, porque en el input del email, hemos añadido el atributo type="email", que ya incluye la validación de formato del email

/* const emailValido = (email) => {
  //retornará true o false
  //regular expressions, stackoverflow
  let valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return valid.test(String(email).toLowerCase());
}; */

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* console.log(username.value); */
  if (username.value === "") {
    showError(username, "Name is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } /* else if (!emailValido(email.value)) {
    showError(email, "El email no es valido");
  } */ else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password is required");
  } else {
    showSuccess(password2);
  }
});
