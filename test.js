// let arr = [1, 2, 3];
// arr.something = 5;

// alert(arr.something);
// let str = "Hello";
// str.something = 5;

// console.log(str.something);
// let obj = {'1': 0, 1: 1, 0: 2};

// // alert(obj['1']);

// console.log(obj['1']);

// let name = "пупкин".replace("п", "д")

// console.log(name);

// function User() { }
// User.prototype = { admin: false };

// let user = new User();
// // alert(user.admin);
// console.log(user.admin);

// let a = X;
// // alert( a == X )

// console.log(a == X);

// console.log(1.15 + 2.30);

// console.log(1.15 + 2.30 == 3.45);
// console.log("test" + 1 + 2);

function f(n) {
  if (n < 2) {
    return 1;
  }

  return n * f(n - 1);
}

console.log(f(100));
