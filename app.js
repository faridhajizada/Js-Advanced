// function a(){
//     b()
// }

// function b(){
//     c()
// }

// function c(){
//     console.log("return c");
// }
// debugger;
// a()

// const time = performance.now();
// console.log(time);

// setTimeout(() => {
//     const time = performance.now();
//     console.log(time);
// }
// , 0);

// document.getElementById("clicker").addEventListener("click", () => {
//   console.log("clicked");
// });

// setTimeout(() => {
//   for (let i = 0; i < 1000; i++) {
//     console.log("hello");
//   }
// }, 5000);
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}