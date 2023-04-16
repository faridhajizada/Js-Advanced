// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.onclick = function () {
//   const rndCol =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   document.body.style.backgroundColor = rndCol;
// };

// btn.onclick = bgChange;

// ------------------------------------------------------------
// var btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
// function bgChange() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener('click', bgChange);
// ------------------------------------------------------------

var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
// btn.addEventListener('click', function() {
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//   });
  
function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
  }
  
  btn.addEventListener('click', bgChange);
  