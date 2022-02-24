const form = document.querySelector(".contactForm");
const htmlLoader = document.querySelector(".outerLoader");
const passedValidation = document.querySelector(".validationPassed");
const nameValue = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subjectValue = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const emailValue = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const addressValue = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

htmlLoader.innerHTML = "";

function validateForm() {
  try {
    event.preventDefault();

    htmlLoader.innerHTML = `<div class="loader"></div>`;

    // Name check
    if (checkLength(nmeValue.value, 0) === true) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    // Subject check
    if (checkLength(subjectValue.value, 9) === true) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }

    // Email check
    if (checkEmail(emailValue.value) === true) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Address check
    if (checkLength(addressValue.value, 24) === true) {
      addressError.style.display = "none";
    } else {
      addressError.style.display = "block";
    }

    if (
      checkLength(nameValue.value, 0) &&
      checkLength(subjectValue.value, 9) &&
      checkLength(addressValue.value, 24) &&
      checkEmail(emailValue.value) === true
    ) {
      passedValidation.style.display = "block";
    } else {
      passedValidation.style.display = "none";
    }

    htmlLoader.innerHTML = "";

    console.log(event);
  } catch (error) {
    console.log(error);
    htmlLoader.innerHTML = `${error}`;
    window.confirm(error);
  }
}

function checkLength(value, characters) {
  if (value.trim().length > characters) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);
