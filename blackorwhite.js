// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   var choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//   } else {
//     para.textContent = '';
//   }
// }
// function setWeather() {
//     var choice = select.value;

//     switch (choice) {
//       case 'sunny':
//         para.textContent = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
//         break;
//       case 'rainy':
//         para.textContent = 'На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго';
//         break;
//       case 'snowing':
//         para.textContent = 'Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//         break;
//       case 'overcast':
//         para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//         break;
//       default:
//         para.textContent = '';
//     }
//   }

const select = document.querySelector("select");
const html = document.querySelector("html");

const update = (bgColor, textColor) => {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
};

select.onchange = function () {
    select.value === "white" ? update("white", "black") : update("black", "white");
};

