"use strict";
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
// function createParagraph() {
//   let para = document.createElement('p');
//   para.textContent = 'You clicked the button!';
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length ; i++) {
//   buttons[i].addEventListener('click', createParagraph);
// }

// debugger
// function x() {
//   y = 1; // возбудит ReferenceError в "строгом режиме"
//   var z = 2;
// }

// x();

// console.log(y); // выведет "1"
// console.log(z);var a;
// var a;
// console.log(a);                // Выведет "undefined" или "", в зависимости от браузера.
// console.log('still going...')

// debugger
// var bla
// bla=2

// bla = 2
// var bla
// console.log(bla)

// debugger
// var x = y, y = 'A';
// console.log(x + y); // undefinedA

// var a = 1;
// var b = "sala,"
// var z= 2;

// const c = a + b+z;
// console.log(typeof c);

// var foo = ["one", "two", "three"];

// // без деструктурирования
// var one   = foo[0];
// var two   = foo[1];
// var three = foo[2];
// console.log(one);
// console.log(two);
// console.log(three);

// с деструктурированием
// var [one, two, three] = foo;

// function f() {
//   return [1, 2];
// }

// console.log(f());

// const btn = document.querySelector('button');
// const p = document.querySelector('p');

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start") {
//     btn.textContent = "Stop";
//     p.textContent = "Stop";
//   } else {
//     btn.textContent = "Start";
//     p.textContent = "Start";
//   }
// }

// function sanitise(x) {
//   if (isNaN(x)) {
//     console.log("not a number");
//   } else {

//     console.log("number");
//   }
// }

// console.log(sanitise(10));
// Expected output: "1"

// console.log(sanitise("NotANumber"));
// Expected output: NaN

// // let a = boolean;
// typeof instance === "boolean"
// console.log(typeof instance);

// let x = (() => { return 1})()
// console.log(x);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const Car = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Mau() {
//     console.log(`salam  ${this.name} `);
//   }
// };

// const mur = new Car("Ferid", 10);
// mur.Mau()

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }

//     get area() {
//       return this.calcArea();
//     }

//     calcArea() {
//       return this.height * this.width;
//     }
//   }

//   const square = new Rectangle(10, 10);

//   console.log(square.area); // 100

// class StaticMethodCall {
//     static staticMethod() {
//       return 'Вызван статический метод';
//     }
//     static anotherStaticMethod() {
//       return this.staticMethod() + ' из другого статического метода';
//     }
//   }
//   StaticMethodCall.staticMethod();
//   // 'Вызван статический метод'

//   StaticMethodCall.anotherStaticMethod();
//   // 'Вызван статический метод из другого статического метода'

// class Book{
//     static Genre(){
//         return "Fantasy"
//     }

//     static Drama(){
//         return  this.Genre() + " is Drama"
//     }

// }

// console.log(Book.Drama());

// class StaticMethodCall {
//     constructor() {
//       console.log(StaticMethodCall.staticMethod());
//       // 'вызван статический метод.'

//       console.log(this.constructor.staticMethod());
//       // 'вызван статический метод.'
//     }

//     static staticMethod() {
//       return 'вызван статический метод.';
//     }
//   }

// class Triple {
//     static triple(n) {
//       if (n === undefined) {
//         n = 1;
//       }
//       return n * 3;
//     }
//   }

//   class BiggerTriple extends Triple {
//     static triple(n) {
//       return super.triple(n) * super.triple(n);
//     }
//   }

//   console.log(Triple.triple());        // 3
//   console.log(Triple.triple(6));       // 18

//   var tp = new Triple();

//   console.log(BiggerTriple.triple(3));

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     greet() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//   }

//   const john = new Person('John', 30);
//   console.log(john.greet())

//   const Farid = new Person('Farid', 25);
//   console.log(Farid.greet());

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   class Cat extends Animal {
//     constructor(name, breed) {
//       super(name); // вызов конструктора родительского класса
//       this.breed = breed;
//     }
//   }

//   const dog = new Animal("Tuzik")
//     console.log(dog.name);

//     const wotland = new Cat("Wotland", "Persian")
//     console.log(wotland.name && wotland.breed);

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     speak() {
//       console.log(`${this.name} издаёт звук.`);
//     }
//   }

//   class Lion extends Cat {
//     speak() {
//       super.speak();
//       console.log(`${this.name} рычит.`);
//     }
//   }

//   let l = new Lion('Фаззи');
//   l.speak();

// class Person {

//     constructor(name) {
//       this._name = name;
//     }

//     get name() {
//       return this._name;
//     }

//     set name(name) {
//       this._name = name;
//     }
//   }

//   const person = new Person('John');
//   console.log(person.name); // "John"
//   person.name = 'Bob';
//   console.log(person.name); // "Bob"

// function F() {}

// const a = new F();
// console.log(a instanceof F);

// console.log(F.prototype instanceof Object);
// console.log(F instanceof Object);

// const b = new C();
// console.log(b instanceof C);

// class Rectangle {
//   constructor(height, weight) {
//     this.height = height;
//     this.weight = weight;
//   }

//   calArea() {
//     return this.height * this.weight;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, weight, text, bgColor) {
//     super(height, weight);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

// }

// const square = new Rectangle(10, 10);
// console.log(square.calArea());
// console.log(square.height);

window.addEventListener("DOMContentLoaded", function () {
  // Tabs

  let tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = "2022-06-11";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  // Modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // const modalTimerId = setTimeout(openModal, 3000);
  // Закомментировал, чтобы не отвлекало

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  // Используем классы для создание карточек меню

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    14,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    21,
    ".menu .container"
  ).render();
});
