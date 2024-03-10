const formRegistration = document.forms.registrationForm;
const formElements = formRegistration.elements;

// Элементы формы и поля ошибок для них
let userName = formElements.userName;
let userNameError = document.querySelector(".userNameError");
let userEmail = formElements.userEmail;
let userEmailError = document.querySelector(".userEmailError");
let userAge = formElements.userAge;
let userAgeError = document.querySelector(".userAgeError");
let userGender = formElements.userGender;
let userPassword = formElements.userPassword;
let userPasswordError = document.querySelector(".userPasswordError");
let userAgreement = formElements.userAgreement;
let userAgreementError = document.querySelector(".userAgreementError");
let formSubmit = formElements.formSubmit;

// Фиксация выбора опции "профессии" в селекте
let userCareerSelect = document.getElementById("userCareerSelect");
let userCareerSelectError = document.querySelector(".userCareerSelectError");
let optionIndicator;
userCareerSelect.addEventListener("change", function () {
  optionIndicator = "Опция выбрана";
});

// Неактивная кнопка до согласия на обработку
userAgreement.addEventListener("change", function () {
  formSubmit.disabled = !userAgreement.checked;
  formSubmit.style.backgroundColor = "#0074bd";
});

// Валидация формы
formRegistration.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки
  let hasError = false;

  //Проверка поля "имя пользователя"
  userNameError.textContent = "";
  const nameRegex = /^[a-zA-ZА-Яа-яЁё ]{2,20}$/;
  if (userName.value.trim() === "") {
    userNameError.textContent = "Пожалуйста, введите имя пользователя";
    hasError = true;
  } else if (nameRegex.test(userName.value)) {
    console.log("Имя пользователя корректно");
  } else {
    userNameError.textContent =
      "Имя пользователя может содержать: буквы, пробелы";
    hasError = true;
  }

  //Проверка поля "электронная почта"
  userEmailError.textContent = "";
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (userEmail.value.trim() === "") {
    userEmailError.textContent = "Пожалуйста, введите email";
    hasError = true;
  } else if (emailRegex.test(userEmail.value)) {
    console.log("Email корректный");
  } else {
    userEmailError.textContent = "Email введён некорректно";
    hasError = true;
  }

  //Проверка поля "возраст"
  userAgeError.textContent = "";
  const ageRegex = /^[\d]+$/;
  if (userAge.value.trim() === "") {
    userAgeError.textContent = "Пожалуйста, введите возраст";
    hasError = true;
  } else if (ageRegex.test(userAge.value)) {
    console.log("Возраст введен корректно");
  } else {
    userAgeError.textContent = "Возраст введен некорректно";
    hasError = true;
  }

  //   Передача в консоль данных из поля "пол пользователя"
  console.log(userGender.value);

  // Проверка выбора профессии из списка
  userCareerSelectError.textContent = "";
  if (optionIndicator === "Опция выбрана") {
    console.log("Профессия выбрана");
  } else {
    userCareerSelectError.textContent = "Выберите профессию из списка";
    hasError = true;
  }

  //   Проверка пароля: не менее 8 символов (minlength); содержать как минимум 1 заглавную букву, 1 строчную букву и 1 цифру
  userPasswordError.textContent = "";
  if (
    /[a-zа-яё]/.test(userPassword.value) &&
    /[A-ZА-ЯЁ]/.test(userPassword.value) &&
    /\d/.test(userPassword.value)
  ) {
    console.log("Пароль надёжный");
  } else {
    userPasswordError.textContent =
      "В пароле должны быть: строчная и заглавная буквы, цифра";
    hasError = true;
  }

  //   Проверка проставления галочки "обработка данных"
  userAgreementError.textContent = "";
  if (userAgreement.checked === true) {
    console.log("Пользователь дал согласие на обработку данных");
  } else {
    userAgreementError.textContent = "Необходимо согласие с условиями";
    hasError = true;
  }

  //   Успешная валидация
  if (hasError === false) {
    console.log("Имя пользователя: " + userName.value);
    console.log("Email: " + userEmail.value);
    console.log("Возраст: " + userAge.value);
    console.log("Пол пользователя: " + userGender.value);
    console.log("Профессия: " + userCareerSelect.value);
    console.log("Пароль: " + userPassword.value);
    alert("Форма успешно отправлена!");
  }

  formRegistration.reset();
});

const formInputs = document.querySelectorAll(".form__input");

formInputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    input.style.border = "2px solid #0074bd";
    input.style.borderRadius = "0.25rem";
  });
  input.addEventListener("blur", function () {
    input.style.border = "";
  });
});
