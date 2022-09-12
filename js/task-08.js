const form = document.querySelector("form.login-form");
const allInputEl = form.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const formEmail = formElements.email.value;
  const formPassword = formElements.password.value;

  const formData = new FormData(event.currentTarget);
  const objectFormData = {};

  if (!formEmail || !formPassword) {
    alert("Всі поля повинні бути заповнені!");
  } else {
     formData.forEach((value, name) => (objectFormData[name] = value));
  console.log(objectFormData);
  }

  form.reset();
}
