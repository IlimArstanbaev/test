//!--------------------------События клавиатуры-------------------------------------
//? keydown: возникает при нажатии клавиши клавиатуры и длится, пока нажата клавиша.
window.addEventListener("keydown", (event) => {
  //   console.log(event);
});

//? keyup: возникает при отпускании клавиши клавиатуры
window.addEventListener("keyup", (event) => {
  // console.log(event);
});

//? Submit
let form = document.querySelector("form");
let btn = document.querySelector("button");
let inpForm = document.querySelectorAll("form input");
let btn1 = document.querySelector("#btn1");
let img = document.querySelector("form img");

btn1.addEventListener("click", () => {
  form.style.display = "block";
});

img.addEventListener("click", () => {
  form.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  inpForm.forEach((elem) => {
    elem.value = "";
  });
  form.style.display = "none";
});

//!---------------------------------------ZAD------------------------------------------------------------------------------------------------------
// Import stylesheets
import "./style.css";

// task1 easy---------------------------------
// Создайте кнопку button.Далее создайте обработчик событий, который при клике выводить модальное окно с приветствием "Hello!"
let btn = document.querySelector("#myButton");
btn.addEventListener("click", () => {
  console.log("Hello!");
});
//task2 easy=-------------------------------------
// Создайте div с текстом "Бум!". Далее создайте событие где по клику экрана в консоле выводятся координаты точки на экране.
// let div1 = document.querySelector('#myElement');
// div1.addEventListener('click', (event) => {
//   const x = event.clientX;
//   const y = event.clientY;
//   console.log(`x=${x}, y=${y}`);
// });
document.addEventListener("click", (event) => {
  console.log("Координаты: " + event.clientX + ", " + event.clientY);
});

//task3 middle----------------------------------------------
// Создайте кнопку button и тег "p" c id="demo".
// Далее создайте событие, при клике который вызывает функцию  displayDate().Функция  displayDate() с помощью селектора с id "demo" cоздаёт объект Date() с текущей датой и временем. Прочитайте про Data()
let button = document.querySelector("#myBtn");
// let paragr = document.createElement('p');
// paragr.id = 'demo';
// document.body.appendChild(paragr);
let paragr = document.querySelector("#demo");
function displayDate() {
  let currentDate = new Date();
  let dateString = currentDate.toString();
  document.getElementById("demo").innerText = dateString;
}
button.addEventListener("click", displayDate);

//task4 middle----------------------------------------------
// Создайте  тег "p" c id="demo".
// Добавьте прослушиватель событий, который запускается, когда пользователь изменяет размер окна.Добавить обработчик событий в объект window

//task5 middle----------------------------------------------
// Создать заголовки h4 с числами. При нажатию на число в нем должен появится квадрат числа, которое он содержит.
// Создаем заголовки h4 с числами

//task6 middle----------------------------------------------
// Даны инпуты.
//  <input type="text" data-length="4" />
// <input type="text" data-length="7" />
// <input type="text" data-length="9" />
//  Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.

//task7 middle----------------------------------------------
// Даны див.
// <div>Hello</div>
// По первому нажатию на  див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.
let myDiv = document.querySelector("div");
myDiv.textContent = "Hello";
document.body.appendChild(myDiv);

function blinkRedBackground() {
  myDiv.style.backgroundColor = "red";
  myDiv.removeEventListener("click", blinkRedBackground);
  myDiv.addEventListener("click", blinkAquaBackground);
}

function blinkAquaBackground() {
  myDiv.style.backgroundColor = "aqua";
  myDiv.removeEventListener("click", blinkAquaBackground);
  myDiv.addEventListener("click", blinkRedBackground);
}
myDiv.addEventListener("click", blinkRedBackground);

//task 8 middle----------------------------------------------
// Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение через alert()
// Создаем HTML-форму с несколькими полями ввода и кнопкой

// 9 task middle----------------------------------
// Создать кнопку , при нажатии которой цвет фона изменяется случайным образом.
let body = document.querySelector("body");
let button1 = document.createElement("button");
button1.textContent = "Изменить цвет";
document.body.appendChild(button1);
button1.addEventListener("click", () => {
  let red = (body.style.backgroundColor = "red");
  let green = (body.style.backgroundColor = "green");
  let blue = (body.style.backgroundColor = "blue");
  let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = randomColor;
});

//10 task easy-----------------------------------------------------
//Имеются инпут <input type="text" id="input" />. Повесьте обработчик событий  'keyup' и выведите на консоль "pressed" при нажатии на keyup.

// 11 task easy-----------------------------------------------------
//Создайте событие input, где при каждом нажатии кнопки на клавиатуре будем выводить в консоль текущее содержимое инпута
// let inputElement = document.createElement('input');
// document.body.appendChild(inputElement);

// inputElement.addEventListener('input', (event) => {
//   console.log(event.target.value);
// });

// inputElement.focus();

// 12 task easy-----------------------------------------------------
// у нас есть  инпут и кнопка:
//  <input id="elem" value="text" />
//<input type="submit" id="button" />
// Создайте событие, где при нажатии на кнопку установливается фокус ввода на наш инпут

// 13 task easy-----------------------------------------------------
//У нас имеется  выпадающий список
// <select id="select">
//<option>one</option>
//<option selected>two</option>
//<option>three</option>
//</select>
//Создайте событие change, которое при изменении селекта выведет на консоль текст выбранного пункта списка.
let select = document.querySelector("#select");

// 14 task easy-----------------------------------------------------
//  у нас дана следующая кнопка:<button id="elem">text</button>
//По клику на кнопку  выведите сообщение о том, была ли нажата одна из клавиш  Alt или Shift:

// 15 task easy-----------------------------------------------------
//У нас есть ссылка  <a href="/" id="link">ссылка</a>. Сделайте так, чтобы по клику на ссылку не происходило перехода на другую страницу

// 16 task easy-----------------------------------------------------
//Имеется три вложенных дива  <div id="elem1">
//<div id="elem2">
//    <div id="elem3">Color</div>
//   </div>
// </div>
//Создайте обработчик события, где при нажатии в alert выводится цвета зеленый,голубой,красный.

// 17 task easy-----------------------------------------------------
// Создайте событие которое подсвечивает поле для ввода красной рамкой если пароль слишком короткий. т.е < 5, иначе пусть подсвечивается черным.

// 18 hard-----------------------------------------------------
//Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul

// 19 hard-----------------------------------------------------
// Вставьте картинку и кнопку в html.
// При нажатии на кнопку скройте картинку
// путем затухания до прозрачного состояния.

// 20 hard-----------------------------------------------------
// Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо)
// анимированно сдвигает элемент влево или вправо на 100px.

//21 task middle
//Создайте событие «нажатие клавиши». Когда клавиша на клавиатуре нажата и удерживается, ваш браузер запускает событие и задний фон должен закрашиваться в фиолетовый цвет.
