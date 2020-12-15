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

//Vamos a cambiar la función callback.
//pasamos un array de inputs , en vez de la variable

const checkInputs = (array) => {
  array.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${item.id} is required`);
    } else {
      showSuccess(item);
    }
  });
};

const checkInputsLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters long`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must not exceed ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const checkPasswords = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords need to match");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputsArr = [username, email, password, password2];
  checkInputs(inputsArr);
  checkInputsLength(username, 5, 10);

  checkInputsLength(password, 5, 15);
  checkPasswords(password, password2);
});
