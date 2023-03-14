// let str=''

// for(let i=0; i<=10;i++){
//     str=str+i
// }
// console.log(str);

// for(let i=0; i<=10;i++){
//     console.log(i);
// }

// for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
//     console.log(i);
//   }

//   // Выражение `in` взято в скобки
//   for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
//     console.log(i);
//  }

// for (let i = 0; ; i++) {
//   debugger
//   if (i > 3) break;
//   console.log(i);
// }

// let i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }

// var cats = ['Билл', 'Макс', 'Пикси', 'Алиса', 'Жасмин'];
// var info = 'Моих кошек зовут ';
// var para = document.querySelector('p');

// for(let i=0; i <cats.length;i++){
//     // info += cats[i] + ', ';

//     if(i===cats.length-1){
//         info= info + 'и ' + cats[i] + '.';

//     }else{
//         info= info + cats[i] + ', ';
//     }
// }
// para.textContent = info;

// var contacts = ['Григорий:2232322', 'Марина:3453456', 'Василий:7654322', 'Наталья:9998769', 'Диана:9384975'];
// var para = document.querySelector('p');
// var input = document.querySelector('input');
// var btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   var searchName = input.value;
//   input.value = '';
//   input.focus();
//   for (var i = 0; i < contacts.length; i++) {
//     var splitContact = contacts[i].split(':');
//     if (splitContact[0] === searchName) {
//       para.textContent = splitContact[0] + ', тел.: ' + splitContact[1] + '.';
//       break;
//     } else {
//       para.textContent = 'Контакт не найден.';
//     }
//   }
// });

// var n = 0;
// var x = 0;

// while (n < 3) {
//   n++;
//   x += n;
// }

// var a =1;
// var a = 2;
// console.log(a);

// let z =1;
// // let z = 2;
// console.log(z);

// var i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     info += 'and ' + cats[i] + '.';
//   } else {
//     info += cats[i] + ', ';
//   }

//   i++;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// // console.log(i); // 5

// let output = document.querySelector ('.output');
// const output = document.querySelector('.output');

// for (let i = 0; i <10 ; i--) {
//     var para = document.createElement('p');
//     output.appendChild(para);
//     para.textContent =   i;

// }

// const output = document.querySelector(".output");
// output.innerHTML = "";

// let i = 10;

// while (i >= 0) {
//   var para = document.createElement("p");
//   if (i === 10) {
//     para.textContent = "Start counting down...";
//   } else if (i === 0) {
//     para.textContent = "Blast off!";
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);
//   i--;
// }
