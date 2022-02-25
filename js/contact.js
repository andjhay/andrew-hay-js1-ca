const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const shipUrl = params.get("url");
const backToShip = document.querySelector(".back-to-ship");

const form = document.querySelector(".contact-form");
const htmlLoader = document.querySelector(".outer-loader");
const passedValidation = document.querySelector(".validation-passed");
const nameValue = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subjectValue = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const emailValue = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const addressValue = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

htmlLoader.innerHTML = "";

function returnToShipPage(link) {
  if (link === null) {
    backToShip.innerHTML = `<a href="index.html">Back</a>`;
  } else {
    backToShip.innerHTML = `<a href="details.html?url=${link}">Back</a>`;
  }
}

returnToShipPage(shipUrl);

function validateForm() {
  try {
    event.preventDefault();

    htmlLoader.innerHTML = `<div class="loader"></div>`;

    // Name check
    if (checkLength(nameValue.value, 0) === true) {
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
