function Cat(color, name) {
  this.color = color;
  this.name = name;
}

var cat = new Cat("red", "kitty");

// console.log(cat);

function myNew(contructor, ...args) {
  var obj = Object.create(contructor.prototype);
  var result = contructor.apply(obj, args);
  return typeof result === "object" ? result : obj;
}

var cat = myNew(Cat, "red", "kitty");
console.log(cat);
