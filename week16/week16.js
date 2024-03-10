//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
  const paragraph = document.getElementById("practicum");
  paragraph.textContent = document.forms.length;
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
  const paragraphTwo = document.getElementById("practicum2");
  paragraphTwo.textContent = document.forms[0].getAttribute("name");
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
  const paragraphThree = document.getElementById("practicum3");
  paragraphThree.textContent =
    document.forms[document.forms.length - 1].getAttribute("name");
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

function makeFour() {
  const paragraphFour = document.getElementById("practicum4");
  const formsAll = document.forms;
  const formNames = new Array(formsAll.length);

  for (let i = 0; i < formsAll.length; i++) {
    formNames[i] = document.forms[i].getAttribute("name");
  }

  paragraphFour.textContent = formNames.join(", ");
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
  const paragraphFive = document.getElementById("practicum5");
  paragraphFive.textContent = document.formThree.elements.length;
}

document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
  const paragraphSix = document.getElementById("practicum6");
  paragraphSix.textContent = document.formTwo.elements.length;
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

function makeSeven() {
  const paragraphSeven = document.getElementById("practicum7");
  const secondFormElem = document.forms[1].elements;

  let elementsList2 = "";

  for (let i = 0; i < secondFormElem.length; i++) {
    element = secondFormElem[i].getAttribute("name");
    elementsList2 = elementsList2 + " - " + element;
  }

  paragraphSeven.textContent = elementsList2;
}

document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

function makeEight() {
  const paragraphEight = document.getElementById("practicum8");
  const firstFormElem = document.forms[0].elements;
  let elementsList1 = "";

  for (let i = 0; i < firstFormElem.length; i++) {
    element = firstFormElem[i].getAttribute("name");
    elementsList1 = elementsList1 + " - " + element;
  }

  paragraphEight.textContent = elementsList1;
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

function makeNine() {
  const paragraphNine = document.getElementById("practicum9");
  const thirdFormElem = document.forms[2].elements;
  let elementsList3 = "";

  for (let i = 0; i < thirdFormElem.length; i++) {
    element = thirdFormElem[i].getAttribute("name");
    elementsList3 = elementsList3 + " - " + element;
  }

  paragraphNine.textContent = elementsList3;
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

function makeTen() {
  const paragraphTen = document.getElementById("practicum10");
  const radioButton = document.lastForm.elements.fourthName;
  paragraphTen.textContent = radioButton.value;
}
document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

function makeEleven() {
  const paragraphEleven = document.getElementById("practicum11");
  let firstForm = document.forms[0];
  let select = firstForm.elements.firstSelect;
  let optionsValues = "";

  for (let i = 0; i < select.length; i++) {
    let option = select[i].value;
    optionsValues += " " + option;
  }

  paragraphEleven.textContent = optionsValues;
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

function makeTwelve() {
  const paragraphTwelve = document.getElementById("practicum12");
  let formCheckBox = [
    document.forms[1].elements.checkboxOne,
    document.forms[1].elements.checkboxTwo,
    document.forms[1].elements.checkboxThree,
  ];
  let idValues = "";

  for (let box of formCheckBox) {
    idNaming = box.getAttribute("id");
    idValues = idValues + " " + idNaming;
  }

  paragraphTwelve.textContent = idValues;
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

function checkButton(e) {
  e.preventDefault();
  const paragraphThirteen = document.getElementById("practicum13");
  const radioButton = document.lastForm.elements.fourthName;

  if (radioButton.checked === true) {
    paragraphThirteen.textContent = "Кнопка выбрана";
  } else {
    paragraphThirteen.textContent = "Кнопка не выбрана";
  }
}

document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта

function checkOption() {
  const paragraphFourteen = document.getElementById("practicum14");
  let firstForm = document.forms[0];
  let select = firstForm.elements.firstSelect;
  paragraphFourteen.textContent = select.value;
}

// value активного option автоматически передаётся в вышестоящий тег select где его можно получить обратившись непосредственно к свойству value.

document.querySelector(".b-14").addEventListener("click", checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
  let firstForm = document.forms[0];
  let select = firstForm.elements.firstSelect;
  select.selectedIndex = 2;
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
  let secondFormCB3 = document.forms[1].elements.checkboxThree;
  secondFormCB3.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки
  let errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";

  const formOne = document.forms.formOne;
  const name = formOne.elements.firstName;
  const email = formOne.elements.firstEmail;

  if ((name.value == 0) | (email.value == 0)) {
    errorMessage.textContent = "Есть пустое поле";
  } else {
    formOne.reset();
  }
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

// Добавила в задание 17 как ветку else в случае, если ошибки нет и форма будет отправлена. - неправильно

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const selectElement = document.getElementById("firstSelect");

selectElement.addEventListener("change", function () {
  let color =
    selectElement.value == "Опция 1"
      ? "red"
      : selectElement.value == "Опция 2"
      ? "green"
      : "blue";
  document.body.style.backgroundColor = color;
});

//Опция 1 - красный цвет; Опция 2 - зелёный цвет; Опция 3 - синий цвет

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

formOne.addEventListener("input", function (event) {
  event.preventDefault(); //Отмена отправки
  let errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";

  const emailInput = document.forms.formOne.elements.firstEmail;
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (emailRegex.test(emailInput.value)) {
    console.log("Email валиден.");
  } else {
    errorMessage.textContent = "Email введён некорректно";
    console.log("Невалидный email.");
  }
});

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.forms.formTwo.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const formTwoErMessage = document.getElementById("result21");

  const checkbox1 = document.getElementById("checkbox1").checked;
  const checkbox2 = document.getElementById("checkbox2").checked;
  const checkbox3 = document.getElementById("checkbox3").checked;

  if (checkbox1 | checkbox2 | (checkbox3 === true)) {
    console.log("ok");
  } else {
    formTwoErMessage.textContent = "Выберите вариант";
  }
});

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
  const thirdForm = document.forms.formThree;
  const nameInput = thirdForm.elements.thirdName;
  const result22 = document.getElementById("result22");

  if (nameInput.value === "") {
    result22.textContent = "Имя не заполненно";
  } else {
    thirdForm.submit();
  }
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled

const radioButton = document.lastForm.elements.fourthName;
const fourthButton = document.lastForm.elements.fourthButton;

radioButton.addEventListener("change", function () {
  fourthButton.disabled = !radioButton.checked;
});

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).
let inputs = document.querySelectorAll(".form__input");

document.querySelector(".b-24").addEventListener("click", function () {
  inputs.forEach(function (element) {
    element.setAttribute("placeholder", "Введите данные");
  });
});

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector(".b-25").addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      input.style.border = "1px solid #00ff00"; //Изменение границы при фокусе
    });
    input.addEventListener("blur", function () {
      input.style.border = ""; // Восстановление стандартной границы после потери фокуса
    });
  });
});

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").addEventListener("click", function (event) {
  event.preventDefault();
  const result26 = document.getElementById("result26");
  const name = document.forms[2].elements.thirdName;
  const placeholderName = name.getAttribute("placeholder");
  result26.textContent = placeholderName;
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");
const result27 = document.getElementById("result27");

formTwoInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    result27.textContent = "Изменение внесено";
  });
});

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById("firstSelect");
const result28 = document.getElementById("result28");

selectFormThree.addEventListener("change", function () {
  result28.textContent = "Опция выбрана";
});
